import { useEffect, useState } from "react";

const Test = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);
  //İlk parametrem bir callback fonksiyonu
  //Eğer 2.parametreyi boş bırakırsam bu komponent her update oldugunda
  //Çalışır
  //useEffect(() => {
  //console.log("component render oldu");
  // });

  //Yukarıdaki use statein dependiceslerini dinliyorum
  //count başlangıç = 0 başlıyor
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  //2.parametre boş bir array alırsa component
  //ilk yüklendiginde çalışır
  useEffect(() => {
    console.log("component ilk yüklendiginde çalışır");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    let interval = setInterval(() => console.log("interval çalıştı!"), 1000);
    return () => {
      console.log("component destroyed");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <button onClick={() => setPostId((postId) => postId + 1)}>
        Sonraki Konu
      </button>
      <hr />
      Bu bir test componenti
    </div>
  );
};

export default Test;
