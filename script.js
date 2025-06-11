async function generateResume() {
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;
  const skills = document.getElementById("skills").value;

  const prompt = `Create a professional resume for ${name} applying for ${job} with these skills: ${skills}. Use a clean, modern format.`;

  // IMPORTANT: Replace "YOUR_OPENAI_API_KEY" with your actual OpenAI API key!
  const apiKey = "YOUR_OPENAI_API_KEY";

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 400
    })
  });

  const data = await response.json();
  document.getElementById("resumeOutput").innerText = data.choices?.[0]?.text?.trim() || "Sorry, something went wrong. Please try again.";
}
