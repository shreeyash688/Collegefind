const params = new URLSearchParams(window.location.search);
const collegeId = params.get("id");

async function fetchCollegeDetails() {
    try {

        console.log("College ID:", collegeId);

        const response = await fetch(`/api/college/${collegeId}`);

        console.log("Status:", response.status);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const college = await response.json();

        const detailsContainer = document.getElementById("detailsContainer");

        detailsContainer.innerHTML = `
        <div class="details-card">

            <h1>${college.name}</h1>

            <p><strong>Type:</strong> ${college.type}</p>

            <p><strong>City:</strong> ${college.city}</p>

            <p><strong>State:</strong> ${college.state}</p>

            <p><strong>Address:</strong> ${college.address}</p>

            <p><strong>Phone:</strong> ${college.phone}</p>

            <p>
                <strong>Website:</strong>
                <a href="${college.website}" target="_blank">
                    Visit Official Website
                </a>
            </p>

            <p>
                <strong>Description:</strong><br><br>
                ${college.description}
            </p>

            <br>

            <a href="colleges.html" class="card-btn">
                ← Back to Colleges
            </a>

        </div>
        `;

    } catch (err) {

        console.error(err);

        document.getElementById("detailsContainer").innerHTML = `
            <h2 style="color:red;text-align:center">
                ${err.message}
            </h2>
        `;
    }
}

fetchCollegeDetails();