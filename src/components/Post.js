import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import image from "../manything.png";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
      
    <main className="bg-green-100 min-h-screen ">
           
           <img src={image} alt="manything" className="absolute object-cover w-full h-full"/>
      <section className="container mx-auto">

        <h1 className="text-5xl flex justify-center cursive relative text-white pt-12" >
          My Blog Posts
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          {/* Welcome to my page of blog posts */}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article  key={post.slug.current}>
                <Link to={"/post/" + post.slug.current} >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-b-8 border-t-8  border-r-8 border-green-300"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-6 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-12 py-4 bg-blue-300 text-black bg-opacity-45 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}