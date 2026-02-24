"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import postsData from "@/data/posts.json";
import Image from "next/image";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";


const page = () => {
  const [selectedImage,setSelectedImage] = useState(0);
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);
  const images = ["/images/cocid.png","/images/corid.png","/images/corid.png","/images/corid.png","/images/corid.png","/images/corid.png","/images/corid.png","/images/corid.png","/images/corid.png"];
  const dateFormat =(dateString:string)=>{
    const date = new Date(dateString);
    return format(date,"MM/dd/yyyy")
  }
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-1 md:px-4 md:pt-1 h-80">
        <nav className="mt-4 p-1 flex gap-2 items-center text-gray-500">
          <Link href="/">
            <p className="text-sm">Home</p>
          </Link>
          <span>{">"}</span>
          <Link href="/accounts">
            <p className="text-sm">Accounts</p>
          </Link>
          <span>{">"}</span>
          <Link href={`/accounts/${slug}`}>
            <p className="text-sm">{post?.title}</p>
          </Link>
        </nav>
        <div className="bg-white grid gap-8 md:grid-cols-2 p-4  ">
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-xl font-bold">{post?.title}</h1>
              <p className="text-sm text-gray-400 ">Posted on {dateFormat(post?.createdAt)}</p>
            </div>
            <div className="relative  h-[400px]  border overflow-hidden shadow-md bg-gray-100 ">
              <Image
              src={images[selectedImage]}
              alt={post?.title || 'image'}
              fill
              className="object-contain"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {images.map((img,idx)=>(
                <button
                key={idx}
                onClick={()=> setSelectedImage(idx)}
                className={`relative  h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${selectedImage === idx ? 'border-3 border-amber-300 scal-105' : 'hover:scale-105'}`}
                >
                  <Image
                  src={img}
                  alt={`${post?.title} ${idx}`}
                  fill
                  className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
