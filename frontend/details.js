const params = new URLSearchParams(window.location.search);
const collegeId = params.get("id");

async function fetchCollegeDetails() {

    try {

        const response = await fetch(`/api/college/${collegeId}`);

        if (!response.ok) {
            throw new Error("College not found");
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

    } catch (error) {

        console.error(error);

        document.getElementById("detailsContainer").innerHTML = `
            <h2 style="text-align:center; color:red;">
                Failed to load college details.
            </h2>
        `;
    }

}

fetchCollegeDetails();