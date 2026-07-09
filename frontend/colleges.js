// ============================================
// FETCH COLLEGES FROM BACKEND
// ============================================

let collegeData = [];


async function fetchColleges() {

    try {

        const response = await fetch("/api/colleges");

        const data = await response.json();

        console.log(data);

        collegeData = data;

        applyFilters();

    }

    catch(err){

        console.log(err);

    }

}


// ============================================
// DOM ELEMENTS
// ============================================

const searchInput = document.getElementById("searchInput");
const stateFilter = document.getElementById("stateFilter");
const typeFilter = document.getElementById("typeFilter");
const collegesGrid = document.getElementById("collegesGrid");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");


// ============================================
// GET COLLEGE IMAGE
// ============================================

function getCollegeImage(name) {

    if (name.includes("IIT Bombay"))
        return "images/iitB.webp";

    if (name.includes("IIT Delhi"))
        return "https://pbs.twimg.com/media/HLpOLMJboAApefH.jpg";

    if (name.includes("IIT Madras"))
        return "https://www.iitm.ac.in/sites/default/files/styles/img_m4/public/happenings/press_release/pressrelease24_11_2025_12_52.jpg?itok=9Y8d3j3q";

    if (name.includes("IIT Kanpur"))
        return "https://staticimg.amarujala.com/assets/images/results.amarujala.com/2025/01/28/iit-kanpur_c93ae184206f3bf2dd4c5be7e499e8e4.jpeg?w=414&dpr=1.0&q=50";

    if (name.includes("IIT Kharagpur"))
        return "https://www.iitkgp.ac.in/assets/images/about_01.jpg";

    if (name.includes("VIT"))
        return "https://vit.ac.in/wp-content/uploads/2023/06/banner7.webp";

    if (name.includes("BITS"))
        return "https://www.bits-pilani.ac.in/wp-content/uploads/tower2-2.jpg";

    if (name.includes("Anna"))
        return "https://www.annauniv.edu/images/main-slider/slide1.jpeg";

    if (name.includes("Jadavpur"))
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Jadavpur_University_Gate_No._4.jpg/1280px-Jadavpur_University_Gate_No._4.jpg";

    if (name.includes("Delhi Technological"))
        return "https://content.jdmagicbox.com/v2/comp/delhi/u1/011pxx11.xx11.120712162545.b1u1/catalogue/delhi-technical-campus-head-office-peera-garhi-delhi-institutes-for-b-tech-engineering-2ednip7.jpg";
    // IISc
    if (name.includes("IISc"))
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6mYj0iYpJwWie2VjTWj490r0PbeDBM2JPUeCb7_6xQ&s=10";

    // NITs
    if (name.includes("NIT Trichy"))
        return "https://www.nitt.edu/home/Library-2019.JPG";

    if (name.includes("NIT Surathkal"))
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg80uhyzzdljFUB_-kenuvnUfjrqzzg1Clk9Uilxl0gQ&s=10";

    if (name.includes("NIT Warangal"))
        return "https://media.collegedekho.com/media/img/institute/crawled_images/Nit_primary.jpg?width=640";

    if (name.includes("NIT Calicut"))
        return "https://nitc.ac.in/xc-assets/images/header/header-institution.webp";

    // IIITs
    if (name.includes("IIIT Hyderabad"))
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlJLlzf5z9YVWwHeJhalz7YGduTEymqatGkqGrzDIoWin_enR8Hv_LMmQ&s=10";

    if (name.includes("IIIT Bangalore"))
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg80uhyzzdljFUB_-kenuvnUfjrqzzg1Clk9Uilxl0gQ&s=10";

    // Private / Deemed Universities
    if (name.includes("BITS"))
        return "https://www.bits-pilani.ac.in/wp-content/uploads/tower2-2.jpg";

    if (name.includes("VIT"))
        return "https://vit.ac.in/wp-content/uploads/2023/06/banner7.webp";

    if (name.includes("Manipal"))
        return "https://imgs.search.brave.com/7luTeHxP4Ybcz_0li5PQcmK4QGXMmapEXWG0qz1cilQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/eXJpc2Vyci5jb20v/aW1hZ2VzL2NvdmVy/LzE3MTc2NzQ0NTdD/b3ZlciUyMFBob3Rv/LmpwZw";

    if (name.includes("SRM"))
        return "https://imgs.search.brave.com/b57DOZzAqBdBEC2nU_yHAqYJQsLjdf2Q1KPAPf_k71U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHdheWVkdWNh/dGlvbnRydXN0Lmlu/L3B1YmxpYy9pbWFn/ZXMvODUvU1JNJTIw/SW5zdGl0dXRlJTIw/b2YlMjBTY2llbmNl/JTIwYW5kJTIwVGVj/aG5vbG9neSUyMDUu/anBn";

    if (name.includes("Amity"))
        return "https://imgs.search.brave.com/sua6UaVUuuXQaCZOITJFrqvsh1VzVaP15Nm_PFWzc2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY0MzI4/NDU1RFNDMDAzNjEu/SlBH";

    if (name.includes("Lovely Professional"))
        return "https://imgs.search.brave.com/58N7i-B9JyQsjjt_AH0PQiT31U7rLwmcKhfokIE4RWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuem9sbGVnZS5p/bi9wdWJsaWMvaW1h/Z2UvV2hhdHNBcHBf/SW1hZ2VfMjAyNV8x/MV8wM19hdF84XzM5/XzE2X1BNX2NhNjU2/MzUyOWU2NWNjNWZi/N2VhNWE1MWQzNTZm/ZDZlLmpwZWc";

    if (name.includes("Chandigarh"))
        return "https://imgs.search.brave.com/3DP29kzDhFg8uLqzae5T_kh5KF14kp3RLKwmj-vW8DI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY0MjE5/NTU5U2NyZWVuc2hv/dCUyMDIwMjUtMTEt/MjclMjAxMDI4MDUu/cG5n";

    if (name.includes("Shiv Nadar"))
        return "https://imgs.search.brave.com/UL71-7wPWExw1pmI-0fB9gPKaVM3YXiRS1YQhPwO1TM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZXNhdGhp/LmNvbS9fbmV4dC9p/bWFnZT91cmw9aHR0/cHM6Ly9tZWRpYS5j/b2xsZWdlc2F0aGku/Y29tL3VuaXZlcnNp/dGllcy8xNzcxNDg0/NTA3OTA1LVNoaXZf/TmFkYXJfVW5pdmVy/c2l0eS53ZWJwJnc9/Mzg0MCZxPTc1";

    if (name.includes("PES"))
        return "https://imgs.search.brave.com/VxIGoHNpG0UG_Q5Z7IGngufpXQCNpqZee28Qsmo5IUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZG1p/bi5nYWxheHllZHV3/b3JsZC5jb20vc3Rv/cmFnZS9jb2xsZWdl/X3BhZ2UvNWRiODBm/NWYzZDUyM18xLmpw/Zw";

    if (name.includes("RV College"))
        return "https://imgs.search.brave.com/cIS2UmkWNhzTl09SdC8MUVRQj2-SYGbk2Ih0jPELg6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS11cGxvYWQuZ2V0/bXljb2xsZWdlLmNv/bS9uZXctdXBsb2Fk/cy9jb2xsZWdlL2dh/bGxlcnkvcnYtY29s/bGVnZS1vZi1lbmdp/bmVlcmluZzYtZ2Fs/bGVyeS1pbWFnZS04/MDAuanBn";

    if (name.includes("BMS"))
        return "https://imgs.search.brave.com/G7yKjj12OU4gFG9RE6IeYOPGxkgf8SPl2i336B6ljjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/Ym1zLWNvbGxlZ2Ut/b2YtZW5naW5lZXJp/bmctYmFuZ2Fsb3Jl/LTM2MTExOC53ZWJw";

    if (name.includes("MS Ramaiah"))
        return "https://imgs.search.brave.com/K4dkJQlFLYFkcLCoLTE8JMDqNaxBM61ZypuUEgmYKac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9VRC9RQS9DVi9H/TEFETUlOLTY1Mzc4/NDE3L21zLXJhbWFp/YWgtY29sbGVnZS1v/Zi1lbmdpbmVlcmlu/Zy1mZWVzLXN0cnVj/dHVyZS1tYW5hZ2Vt/ZW50LXF1b3RhLTUw/MHg1MDAuanBn";

    if (name.includes("Thapar"))
        return "https://imgs.search.brave.com/KvnWzOV7TPW1lZc9fY7osUPxdb1SCtISS52F2NgIZJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/dGhhcGFyLWluc3Rp/dHV0ZS1vZi1lbmdp/bmVlcmluZy10ZWNo/bm9sb2d5LXBhdGlh/bGEtMjMxMjQ2Lndl/YnA";

    if (name.includes("KIIT"))
        return "https://imgs.search.brave.com/mKrCLeMRn5tSJGlkiEUqbyjCKg2ZIE586JNZHTQlhps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L0tpaXRfbGli/cmFyeV9idWlsZGlu/Zy5qcGc";

    if (name.includes("SOA"))
        return "https://imgs.search.brave.com/-VHTNaLg5DGypX8yh3-II2_WVB6lugbNn3-uQMUhoSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/c29hLXVuaXZlcnNp/dHktYmh1YmFuZXN3/YXItMzYwMTUyLndl/YnA";

    if (name.includes("Nirma"))
        return "https://imgs.search.brave.com/Yy_eT6AAIqjdBKTWXuB4ut8J01UmDZmSL6hVkziokHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8yODI3NV9D/YW1wdXMlMjAoNCku/d2VicA";

    if (name.includes("DAIICT"))
        return "https://imgs.search.brave.com/OVWppL3JnZx-z63mpZ4miRhWu7XNK__DqI_0_u-uvW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzky/NDA0My9DYW1wdXMl/MjA1MS5qcGc";

    if (name.includes("PDPU"))
        return "https://imgs.search.brave.com/eYtnfk6Ox98ATk29WMLgBBwDiTdiaDXfmIRpPCxjsqU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTNs/b2FydGpvYzF5bi5j/bG91ZGZyb250Lm5l/dC91cGxvYWQvaW5z/dGl0dXRlL2ltYWdl/cy9sYXJnZS8xOTA3/MzAwNDQ2MTJfcGRw/dS53ZWJw";

    if (name.includes("Christ"))
        return "https://imgs.search.brave.com/nu1R3yxCYIRScAtbm0Bp5YkxenIS8JVXyUwB11VblRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWVzb25saW5lLmNv/LmluL2NvbGxlZ2Vz/LWltYWdlL2Nocmlz/dC11bml2ZXJzaXR5/LmpwZw";

    // Government Universities
    if (name.includes("Delhi Technological"))
        return "https://imgs.search.brave.com/hkBpv5jqVxXxcWvY88B8UmHsEdivhqhh1aggZF5xSlc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWIt/M2JkMTQ0YTQwOWY5/NDA5OThhZmQzNjdh/ZjFkY2RlNDQucjIu/ZGV2L21pZ3JhdGVk/L2NvbGxlZ2VzLzE3/NjU5OTQwNDY2Mjct/ZDJkZTY0MWUtemxq/bWxicHV0bWFzaTBl/Z3JzajUuanBn";

    if (name.includes("Jadavpur"))
        return "https://www.jadavpuruniversity.edu.in/images/jadavpur.jpg";

    if (name.includes("Anna"))
        return "https://www.annauniversity.edu/images/anna.jpg";

    if (name.includes("COEP"))
        return "https://imgs.search.brave.com/OHjtg3SiFn46_k2bo86wGbtM_KhGy6kKQRKCBqyEWXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/Y29lcC10ZWNobm9s/b2dpY2FsLXVuaXZl/cnNpdHktcHVuZS0z/NjQ4MjAud2VicA";

    if (name.includes("VJTI"))
        return "https://imgs.search.brave.com/uuXzQ6Fw0j65AoXBrsUp_EPGJd9hM592PmmAeVZ5gEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY2NjY0/OTI2Y2FtcHVzJTIw/KDEwKS5qcGVn";

    if (name.includes("College of Engineering Trivandrum"))
        return "https://imgs.search.brave.com/A7dp-fWvsnESGyEYNqM2sJAt-3UAa0fk3l8kqd6zzu4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/Y29sbGVnZS1vZi1l/bmdpbmVlcmluZy10/cml2YW5kcnVtLTM0/OTg5OC53ZWJw";

    if (name.includes("Jamia"))
        return "https://imgs.search.brave.com/rv0BMT1VfJu9FcRxTrmTCsE7RWGYq28ADBFBoPpgqiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEx/MjIxODAvY2wuanBn";

    if (name.includes("University of Hyderabad"))
        return "https://imgs.search.brave.com/a84N2U2LmyNjJHnEXLLSzEI3OPkDAw8sI3QGY6IYNBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNDMzMjM3/MjA5aWdtbC5qcGc";

    if (name.includes("Osmania"))
        return "https://imgs.search.brave.com/b7JYvP_l2ckrIkX5pBztmU_D2WXK_kjqK6iCa4Vr_I8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEx/MjUyMTAvMTAwMDA1/MzMyNC5qcGc";

    if (name.includes("JNTU Hyderabad"))
        return "https://www.jntuh.ac.in/images/jntuh.jpg";

    if (name.includes("JNTU Kakinada"))
        return "https://imgs.search.brave.com/qDT_svpC4gyTjqMGs-W_47tt38Sf6JTSO2e8FOWxXp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93b3Js/ZGRvY3NlcnZpY2Vz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMS9pbmo0/MTZudW04LTE1dDky/NTkuanBn";

    if (name.includes("Andhra University"))
        return "https://imgs.search.brave.com/21jM1aRoXyvUnoCxH6tJ0gOI2I9VTREyCNp5KKF0PCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/YW5kaHJhLXVuaXZl/cnNpdHktY2FtcHVz/LXRhZGVwYWxsaWd1/ZGVtLTI5NzE1NS5q/cGc";

    if (name.includes("Birla Institute of Technology"))
        return "https://imgs.search.brave.com/21Z5hqHL5Esl9n5iTaO1E6DTgL_U2Dm6fgH2CjtH8BA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2lrc2hhcGVkaWEu/Y29tL3B1YmxpYy9k/YXRhL2NvbGxlZ2Vz/L2JpcmxhLWluc3Rp/dHV0ZS1vZi10ZWNo/bm9sb2d5LXJhbmNo/aS1qaGFya2hhbmQv/ZlV3aDFQTnF1Vi53/ZWJw";

    if (name.includes("Aligarh Muslim"))
        return "https://imgs.search.brave.com/tQrmNHGgdJerdrYXMM3IluXDTu-6W59jN-oRglapn40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTA1/NTkyNzQvcGhvdG8v/aW5kaWEtdmlldy1v/Zi10aGUtYWxpZ2Fy/aC1tdXNsaW0tdW5p/dmVyc2l0eS1jYW1w/dXMtaW4tdXR0YXIt/cHJhZGVzaC1pbmRp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NWFicGFYUWFf/RHpBMS1hcHN2T0tK/dmlVcUF6VTAtUktv/NThkZzFWdVVFMD0";

    if (name.includes("Banaras Hindu"))
        return "https://imgs.search.brave.com/jf5DG8iS7NwAbGkIbEy8a92UuUyP3oYwQnzPVZgyH_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4L0JIVV9NYWlu/X0dhdGUsX0JhbmFy/YXNfSGluZHVfVW5p/dmVyc2l0eV9lbmhh/bmNlZC5qcGc";

    if (name.includes("University of Delhi"))
        return "https://imgs.search.brave.com/shISJfxxLqL-92pDroSYcBZRAgAgjFPIdmBiDVUUg1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNjgvMjYzNzY4/LTA1MC02OUVFQTdC/Ny9TdHVkZW50cy1h/dC1EZWxoaS1Vbml2/ZXJzaXR5LW5vcnRo/LWNhbXB1cy1vbi10/aGUtc2Vjb25kLWRh/eS1vZi1hZG1pc3Np/b25zLWZvci0yMDIx/LTIyLW9uLU9jdG9i/ZXItNS0yMDIxLWlu/LU5ldy1EZWxoaS1J/bmRpYS1Vbml2ZXJz/aXR5LW9mLURlbGhp/LmpwZz93PTQwMCZo/PTMwMCZjPWNyb3A";

    if (name.includes("Calcutta University"))
        return "https://imgs.search.brave.com/KllS_Av8ddHUoFUwidFF932raVGmH7XvWN-OTnRqs-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTNs/b2FydGpvYzF5bi5j/bG91ZGZyb250Lm5l/dC91cGxvYWQvaW5z/dGl0dXRlL2ltYWdl/cy9sYXJnZS9Vbml2/ZXJzaXR5LW9mLUNh/bGN1dHRhLUtvbGth/dGEtQ2FtcHVzLndl/YnA";

    if (name.includes("Savitribai Phule Pune"))
        return "https://imgs.search.brave.com/bMyPN4NpvI8z2VkeBQEFUeDJpN4p7rWFDeQGI8O9RQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zYXZp/dHJpYmFpLXBodWxl/LXB1bmUtdW5pdmVy/c2l0eS1mb3VuZGVk/LXBvb25hLW1haGFy/YXNodHJhLWluZGlh/LWFzaWEtMzM3NjI2/Mzk4LmpwZw";
    // IITs
if (name.includes("IIT Roorkee"))
    return "images/IIT Roorkee.jpg";

if (name.includes("IIT Guwahati"))
    return "https://imgs.search.brave.com/ANXYiCvK9FeF0ZDDg7mqyNMH7S9zr7XrMU09yHMzOkY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNjQzMjg2/MzM3ODUzNjE2MDI3/LmpwZw";

if (name.includes("IIT Hyderabad"))
    return "https://imgs.search.brave.com/QgvoMpr9Eqas-gC5TYwzmToAXPGTxOEaCYIiyGzydrI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jb2xsZWdlZGVr/aG8uY29tL21lZGlh/L2ltZy9pbnN0aXR1/dGUvY3Jhd2xlZF9p/bWFnZXMvMDlJSVQt/SFlERVJBQkFEMi5q/cGc_d2lkdGg9MTA4/MA";

if (name.includes("IIT Indore"))
    return "https://imgs.search.brave.com/xSGgz5WFpPX5qVS0d-9hsGKYb0MBB_CXJbTQLKqNn4Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9kbWFzZWR1Y2F0/aW9uLmNvbS9zdG9y/YWdlL3VwbG9hZHMv/MTc2NjgxNjIyMF9J/bmRpYW4lMjBJbnN0/aXR1dGUlMjBvZiUy/MFRlY2hub2xvZ3ks/JTIwSW5kb3JlLmpw/Zw";

if (name.includes("IIT Bhubaneswar"))
    return "https://imgs.search.brave.com/YjZvUVjTN-AzZiCrnAOTtnlYCYz380nm5IxsbYpEZuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY0Njcz/NDc3Q2FtcHVzJTIw/KDkpLndlYnA";

if (name.includes("IIT Gandhinagar"))
    return "https://imgs.search.brave.com/vYJiuaGHZM3Pj3MGx39BILdaBm4x3hEAAcSCQnh9qxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/aW5kaWFuLWluc3Rp/dHV0ZS1vZi10ZWNo/bm9sb2d5LWdhbmRo/aW5hZ2FyLTIzODc1/Ny53ZWJw";

if (name.includes("IIT Patna"))
    return "https://imgs.search.brave.com/fr-wN7w4GxOZjLJUE1A2IIurZia-sJeG2fbcCPvz01U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY3MDkw/MDQ4Q2FtcHVzJTIw/NC5qcGVn";

if (name.includes("IIT Mandi"))
    return "https://imgs.search.brave.com/WK_bEMczdogZUieC6df0zPjlJl9MHesRaIgalLj23Qo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNDQxMTAx/NzI5dGMyLmpwZw";

if (name.includes("IIT Jodhpur"))
    return "https://imgs.search.brave.com/NS2xe61SJMSWiNmB_JaVxiHej25FqbPxUIeuGm23VBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2lrc2hhcGVkaWEu/Y29tL3B1YmxpYy9k/YXRhL2NvbGxlZ2Vz/L2lpdC1qb2RocHVy/LWpvZGhwdXItcmFq/YXN0aGFuLzh2WFcw/SUd6Wmoud2VicA";

if (name.includes("IIT Ropar"))
    return "https://imgs.search.brave.com/HJ9hTlAiRRxpoiCOmZyZ-K-qiBYZYaEsoUN4XUc70lw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQ2L0lJVF9Sb3Bh/cl8tX01haW5fQnVp/bGRpbmdfb2ZfdGhl/X1RyYW5zaXRfQ2Ft/cHVzLkpQRw";


// NITs
if (name.includes("NIT Rourkela"))
    return "https://imgs.search.brave.com/XdIow7Fouj1HMBopb6oPJtmo2HIfSNx7_b8kG0Vye1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNDgyMzky/ODAxY2VyYW1pY19k/ZXBhcnRtZW50Lmpw/Zw";

if (name.includes("NIT Durgapur"))
    return "https://imgs.search.brave.com/RymnegfArMY7v1jL28Bw8U4YIsIPxAStCi6RLJODRiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY1NDUx/OTU4Q2FtcHVzJTIw/KDE0KS5qcGc";

if (name.includes("NIT Silchar"))
    return "https://imgs.search.brave.com/9j3V9C8gQF1VxZMHn42pePkuc2rgAfScac72Hifbzgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8yNTM5OV9l/bnRyeSUyMGdhdGUu/d2VicA";

if (name.includes("NIT Hamirpur"))
    return "https://imgs.search.brave.com/w5MbLwYZfwjXxk-ZtLr7Crzhr-t65s_Wmk9-jw180pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNDMyMDI3/MzU3bmlpdCUyMDEu/anBn";

if (name.includes("NIT Kurukshetra"))
    return "https://imgs.search.brave.com/HcbFjI-7TaWtm40JscdsPUwjUcz6jhNvWdFFReAm_Ys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEx/MzU1MjYvMTAwMDAw/MDQxOC5qcGc";

if (name.includes("NIT Jalandhar"))
    return "https://imgs.search.brave.com/b44NGPJLXB5WFs3_RTFV24aPRkY6aNUrAtqVUB4r4g4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8yNTc4MV9C/dWlsZGluZzIud2Vi/cA";

if (name.includes("NIT Raipur"))
    return "https://imgs.search.brave.com/FiKpZWwGOwUuj0Zo3oi2YrCTq7ZqZr4b8RgOoTxxPyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8yNTQ0Ml9j/YW1wdXMud2VicA";


// IIITs
if (name.includes("IIIT Allahabad"))
    return "https://imgs.search.brave.com/X6d_OJPNDct9XrcodtfOj85Qim0fR3CH1jlT1f8jV2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9vc3RteXRh/bGVudC5jb20vaW1n/L3VuaXYvaWlpdC1h/bGxhaGFiYWQtY2Ft/cHVzLWFkbWlzc2lv/bi53ZWJw";

if (name.includes("IIIT Gwalior"))
    return "https://imgs.search.brave.com/vVP2sijXxwFwrfxg-EGgKkhR1wLrpn0c05fh7nrQP3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNTAzODk3/NDE0MTQ4OTY0NDAw/NzE0MzUzODYwMDgx/NDA2MzcwNDI1NTUy/ODk0XzEwMTUxNzU2/OTk4NzMwMzMyXzE0/MjkxNjU2NTBfbi5q/cGc";

if (name.includes("IIIT Pune"))
    return "https://imgs.search.brave.com/U5LnIlF5foNgyJCbCEwADs8qNslbvKv_GDy5UTo2agg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEx/MzYzNzAvMTAwMDAx/MDY4Ny5qcGc";

if (name.includes("IIIT Lucknow"))
    return "https://imgs.search.brave.com/87A-EGezq1yZTxNVi5ML7BM3AJUO04CQkKHl3Yd7zyE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS81NTc5Ml9l/bnRyeSUyMGdhdGUu/d2VicA";

if (name.includes("IIIT Nagpur"))
    return "https://imgs.search.brave.com/ccpJQndV8MfNq66wAjE_FUlMVVvoW55K_h0XeLiuC7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEx/NTc5MTUvY2VtcHVz/LmpwZWc";


// Private Universities
if (name.includes("Bennett University"))
    return "https://imgs.search.brave.com/k277VwxetHn13qmeBUHvzdT5UNiq9_AB8ts8BtsINh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNjE0MzQx/NjYwMTQwNDU2OThf/MTI0NTMxMzQ3NTQ4/MTc2MV8xMjE4NTQ5/ODg2NDIzNzQzMjlf/bi5qcGc";

if (name.includes("Galgotias University"))
    return "https://imgs.search.brave.com/4FqT8_oyGDOgNnbw_tM82peWEg0BPIPvxsW97tdHpkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY2NDIy/OTcwY2FtcHVzJTIw/KDgpLmpwZw";

if (name.includes("Sharda University"))
    return "https://imgs.search.brave.com/zeZp4Qvmu9bIGi461nHwOg7qGJEKRDf_GqdyLA7ODhI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dW5pdmVyc2l0eWth/cnQuY29tLy9Db250/ZW50L3VwbG9hZC9h/ZG1pbi80bHB6eDFm/eS5qbGYuanBn";

if (name.includes("NMIMS Mumbai"))
    return "https://imgs.search.brave.com/VZSsHlzlnO3Sr8sdKWFiyRUMSRQONRuWN8CIxkFZp3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ubWF0/Lm5taW1zLmVkdS9p/bWFnZXMvbm1pbXMt/bmF2aS1tdW1iYWkt/Y2FtcHVzLmpwZw";

if (name.includes("Symbiosis International University"))
    return "https://imgs.search.brave.com/4gSMSA0mQO3RR7w7FPJh63A2YxAifrVG7fwfiZcVkow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cHVuZS8wOS8wMjBw/NTA4MTQwOS9jYXRh/bG9ndWUvc3ltYmlv/c2lzLWludGVybmF0/aW9uYWwtdW5pdmVy/c2l0eS1sYXZhbGUt/cHVuZS1jb2xsZWdl/cy04c2k3emtoeDJ2/LmpwZz93PTM4NDAm/cT03NQ";

if (name.includes("Graphic Era University"))
    return "https://imgs.search.brave.com/PCxR2diPpz7c08I07f49kKCGk8xPxHHnGosMdvLCsnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRtaXNzaW9ubGVs/by5pbi91cGxvYWQv/MTU1MzM0MTkxN0NB/TVBVUyUyMDMuanBn";

if (name.includes("Jain University"))
    return "https://imgs.search.brave.com/ySPe4E49q1BbGHMXRX3gkb1UwkuospdJeT_kdR9-oyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWVzb25saW5lLmNv/LmluL2NvbGxlZ2Vz/LWltYWdlL2phaW4t/dW5pdmVyc2l0eS5q/cGc";

if (name.includes("REVA University"))
    return "https://imgs.search.brave.com/qP2kI6Iyxqw_wMhAzIOj6GOIrm6bcznuhrEd3iJHtOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2lrc2hhcGVkaWEu/Y29tL3B1YmxpYy9k/YXRhL2NvbGxlZ2Vz/L3JldmEtdW5pdmVy/c2l0eS1iYW5nYWxv/cmUta2FybmF0YWth/L3JldmEtdW5pdmVy/c2l0eS1iYW5nYWxv/cmUta2FybmF0YWth/LWJhbm5lci53ZWJw";

if (name.includes("Presidency University"))
    return "https://imgs.search.brave.com/mzD59bPI5R5RJspm7iUWCYRwy5yT4JR1K5Se_De9ljk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEw/Njk4NDYvaW5ib3Vu/ZDc5NTYwMjUyNjc3/NTc1NDYxNzUuanBn";

if (name.includes("Alliance University"))
    return "https://imgs.search.brave.com/0YXzDacLlzxX0Dfwav3R5KdGLNstOTA6ZA5glqJzdB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNjQ2Mzg4/MjExdW5uYW1lZCUy/MCgxMikuanBn";

if (name.includes("Parul University"))
    return "https://imgs.search.brave.com/9HGIyhCRyU76kI9FaZsoMX39Vw-heOXTho90EnJdHV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYWNo/ZS5jYXJlZXJzMzYw/Lm1vYmkvbWVkaWEv/YXJ0aWNsZV9pbWFn/ZXMvMjAyNS84LzIx/L1BhcnVsLXVuaXZl/cnNpdHR5LTAzJTIw/KDIpJTIwKDEpLmpw/Zw";

if (name.includes("KL University"))
    return "https://imgs.search.brave.com/TjOrWfBCi9dH5Hch3bFQT9RpljfTs1IZU7iJWVcnKu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNTc5MDY5/OTkwRmVkX0NTX01l/Y2guanBn";

if (name.includes("SASTRA University"))
    return "https://imgs.search.brave.com/_LE4Y0k0IMRE1KBGLObbX3Rd7tFbahoqhP5S579WFkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW1w/dXNwcm8uY28uaW4v/Y29sbGFnZS1pbWFn/ZS8xNzQ5MjkyMzk0/X3Jvd181Ni5qcGc";


// Government Colleges

if (name.includes("BIT Sindri"))
    return "https://imgs.search.brave.com/jgc82XR26qYJzKnr4p8TpCM03-vOlM0j1PkmgHEIgzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNzY2Mzky/MDk3Q2FtcHVzJTIw/My5qcGc";

if (name.includes("Harcourt Butler Technical University"))
    return "https://imgs.search.brave.com/CsWMntBp2N8YwW4AGMTdEs5vjTI7ElkrSc00z3UA8iQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/aGFyY291cnQtYnV0/bGVyLXRlY2huaWNh/bC11bml2ZXJzaXR5/LWthbnB1ci0zNjQw/NTIud2VicA";

if (name.includes("Government College of Engineering Aurangabad"))
    return "https://imgs.search.brave.com/TtXKRdozgbplUBy5ScdQYSdKDaHW23tzB-BLRL4ZzBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jb2xsZWdlZGVr/aG8uY29tL21lZGlh/L2ltZy9pbnN0aXR1/dGUvY3Jhd2xlZF9p/bWFnZXMvR292ZXJu/bWVudF9Db2xsZWdl/X29mX0VuZ2luZWVy/aW5nYXVyYTQ4MC5q/cGc_d2lkdGg9NjQw";

    // Default image
   return "images/default.jpg";
}



// ============================================
// RENDER COLLEGES
// ============================================

function renderColleges(list) {

    if (!collegesGrid) {
        console.log("collegesGrid not found");
        return;
    }

    collegesGrid.innerHTML = "";

    if (resultCount) {
        resultCount.textContent =
            `Showing ${list.length} college(s)`;
    }

    if (list.length === 0) {

        if (noResults) {
            noResults.style.display = "block";
        }

        return;
    }

    if (noResults) {
        noResults.style.display = "none";
    }

    list.forEach(college => {

        collegesGrid.innerHTML += `
        <div class="card">

            <img
                src="${getCollegeImage(college.name)}"
                class="card-img"
                alt="${college.name}"
            >

            <div class="card-body">

                <span class="card-type">
                    ${college.type || "N/A"}
                </span>

                <h3 class="card-name">
                    ${college.name}
                </h3>

                <p class="card-location">
                    📍 ${college.city}, ${college.state}
                </p>

                <a href="details.html?id=${college.id}"
                   class="card-btn">
                    View Details
                </a>

            </div>

        </div>
        `;
    });
}


// ============================================
// FILTER LOGIC
// ============================================

function applyFilters(){

    const searchVal =
        searchInput.value.toLowerCase();

    const stateVal =
        stateFilter.value;

    const typeVal =
        typeFilter.value;

    const filtered = collegeData.filter(college=>{

        const matchesSearch =

            college.name.toLowerCase().includes(searchVal) ||

            college.city.toLowerCase().includes(searchVal);

        const matchesState =

            stateVal==="" ||

            college.state===stateVal;

        const matchesType =

            typeVal==="" ||

            college.type===typeVal;

        return matchesSearch &&
               matchesState &&
               matchesType;

    });

    renderColleges(filtered);

}


// ============================================
// RESET FILTERS
// ============================================

function resetFilters() {
    searchInput.value = "";
    stateFilter.value = "";
    typeFilter.value = "";

    renderColleges(collegeData);
}


// ============================================
// EVENT LISTENERS
// ============================================

if (searchInput)
    searchInput.addEventListener("input", applyFilters);

if (stateFilter)
    stateFilter.addEventListener("change", applyFilters);

if (typeFilter)
    typeFilter.addEventListener("change", applyFilters);


// ============================================
// START
// ============================================

fetchColleges();