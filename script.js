document.getElementById('generateBtn').addEventListener('click', async function() {
  const name = document.getElementById("name").value.trim();
  const job = document.getElementById("job").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const output = document.getElementById("resumeOutput");
  const loading = document.getElementById("loading");
  output.textContent = "";
  loading.style.display = 'block';

  // Replace this URL with your backend endpoint that calls OpenAI API
  // For now, this will show a message since browsers can't call OpenAI directly.
  // See the instructions below for how to set up a simple backend.
  const backendUrl = "https://YOUR_BACKEND_ENDPOINT_HERE"; // <-- Change this!

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, job, skills })
    });

    loading.style.display = 'none';

    if (response.ok) {
      const data = await response.json();
      output.textContent = data.resume || data.result || data.text || "Resume generated but response format unknown.";
    } else {
      output.textContent = "Something went wrong. Please try again later.";
    }
  } catch (err) {
    loading.style.display = 'none';
    output.textContent = "Network or server error. Please try again later.";
  }
});
