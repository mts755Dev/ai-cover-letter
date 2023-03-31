import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateCoverLetter = async (name, expertise, jobDescription) => {
  const prompt = `Create cover letter of around 200 words for job ${jobDescription} using my name ${name} and experise ${expertise}`;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    if (!response) {
      console.error("Error: Response is undefined.");
      return null;
    } else {
      const data = response.data.choices[0].text.trim();
      console.log(data)
      return data;
    }
  } catch (err) {
    console.error("Error: API request failed.");
    console.error(err);
    return null;
  }
};
