import { Box } from "@mui/material";
import Post, { PostData } from "./post/Post";

const posts: PostData[] = [
  {
    user: "John Doe",
    userColor: "info.dark",
    date: "January 13, 2023",
    text: `The waters of Moraine Lake seem like they have been poured straight
		from the heavens into the Valley of the Ten Peaks. The towering
		mountains encircle the deep blue surface of the lake in a formation so
		extraordinary, only Mother Nature could shape it.`,
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80",
    imageAlt: "Morain Lake",
  },
  {
    user: "Sarah Taylor",
    userColor: "success.light",
    date: "January 12, 2023",
    text: ` Officially known as the Republic of Maldives or Maldive Islands, 
		the independent nation of islands is located in the north-central Indian Ocean, 
		southwest of Sri Lanka and India. Maldives is an archipelagic state, 
		meaning it is a country with one or more archipelagos or collection of islands.`,
    image: "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyYWliZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Maldives islands",
  },
  {
    user: "Jack Harris",
    userColor: "warning.dark",
    date: "January 11, 2023",
    text: `Santa Cruz is one of the most popular and well-known 
		neighborhoods of Seville. Its streets and colors of the facades 
		give a very special and southern atmosphere to this part of the city.`,
    image:
      "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Santa Cruz",
  },
  {
    user: "Teddy Allen",
    userColor: "error.light",
    date: "January 10, 2023",
    text: `The Meguro River meanders nearly 8 kilometers through several chic 
		neighborhoods before emptying into Tokyo Bay. Generously landscaped walking 
		paths along its banks and easy access to drinking and dining make it 
		popular year-round.`,
    image:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt: "Meguro River",
  },
];

export default function MainPanel() {
  return (
    <Box py={2} flex={4}>
      {posts.map((post) => (
        <Post key={post.image} {...post} />
      ))}
    </Box>
  );
}
