import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBlogPosts } from '../redux/posts/actions';
import Header from './Header';
import Post from './Post';

const postsByFilters = (allPosts, filters) => {
  const { author, category } = filters;
  let posts = [];
  if (author !== 'All') {
    posts = allPosts.filter((post) => post.author === author);
  } else if (category !== 'All') {
    posts = allPosts.filter((post) => post.category === category);
  } else {
    posts = allPosts;
  }
  return posts;
};

const Posts = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const { posts, searchText } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAllBlogPosts());
  }, [dispatch]);

  let postList = postsByFilters(posts, filters);

  if (searchText !== '') {
    postList = posts.filter((post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Header />
        <div
          className={`mt-12 max-w-lg mx-auto lg:max-w-none ${
            postList.length && 'grid gap-5 lg:grid-cols-3'
          }`}
        >
          {postList.length ? (
            postList.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <p className="text-red-500 font-bold my-5 text-center">
              Nothing Found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Posts;
