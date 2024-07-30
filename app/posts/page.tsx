// 'use client'
import React from "react";
import ViewUserPost from "../components/Posts/ViewUserPost";
import CardList from "../components/Posts/CardList";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage = async () => {
  const response = await fetch(base_url,{
    cache: 'no-store',
    next: {revalidate: 10}
  });
  const posts: Iposts[] = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8 p-6">Posts Page</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <CardList key={post.id}>
          <p className="text-lg font-semibold ">{post.id}</p>
          <h2 className="text-2xl font-bold my-2">{post.title}</h2>
          <p className="text-lg text-gray-200 mb-4">{post.body}</p>
          <ViewUserPost userId={post.userId} />
        </CardList>
      ))}
    </div>
  </div>
  );
};

export default PostsPage;
