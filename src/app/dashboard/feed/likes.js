"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Likes({ post, user }) {
  const router = useRouter();

  const handleLikes = async () => {
    const supabase = createClientComponentClient();
    // const {
    //   data: { user }
    //} = await supabase.auth.getUser();
    if (user) {
      await supabase
        .from("likes")
        .insert({ user_id: user.id, post_id: post.id });
    }
  };
  console.log(post);
  return (
    <>
      <button onClick={handleLikes}>{post.likes.length} Likes</button>
    </>
  );
}
