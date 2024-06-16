function handleclick() {
                const name = document.getElementById("name").value;
                const year = document.getElementById("year").value;
                const outputUrl = `https://localhost:8080/?name=${name}&year=${year}`;
                document.getElementById("output-url").innerText = outputUrl;
            }