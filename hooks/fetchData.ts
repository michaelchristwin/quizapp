import { createClient } from "next-sanity";
import { projectId, dataset } from "@/sanity/env";

export interface QuestionProps {
  imageUrl: string;
  audios: string;
  correct_answer: number;
  id: string;
  choices: string[];
}

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2023-08-04",
  useCdn: true,
});

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export async function getData(): Promise<QuestionProps[]> {
  const res = await client.fetch(`*[_type == "questions"]{
      "imageUrl": images.asset->url,
      "audios": audios.asset->url,
      correct_answer,
      _id,
      choices
    }`);

  return res;
}

export default getData;
