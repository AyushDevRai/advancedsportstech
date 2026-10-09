const fs = require('fs');
const path = require('path');

const certificatesDir = path.join(__dirname, '..', 'public', 'certificates');
const files = fs.readdirSync(certificatesDir).filter(f => f.endsWith('.pdf'));

function slugify(name) {
  return name
    .replace(/\.pdf$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Map each PDF file to metadata
const certificates = files.map(file => {
  const slug = slugify(file);
  const base = file.replace(/\.pdf$/i, '');
  
  let sport = "Hockey";
  let governingBody = "FIH";
  let standard = "FIH Certified Field";
  let title = base;
  let city = "India";
  let state = "India";
  let featured = false;

  // Specific high-profile featured
  if (file.includes("KALINGA STADIUM - PITCH - 1")) {
    title = "Kalinga Hockey Stadium – Pitch 1";
    city = "Bhubaneswar";
    state = "Odisha";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Category 1 · World Cup 2023";
    featured = true;
  } else if (file.includes("Major Dhyan Chand") && file.includes("FOP 1")) {
    title = "Major Dhyan Chand National Stadium – FOP 1";
    city = "New Delhi";
    state = "Delhi";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Global Category Field";
    featured = true;
  } else if (file.includes("Mayor Radhakrishnan")) {
    title = "Mayor Radhakrishnan Hockey Stadium";
    city = "Chennai";
    state = "Tamil Nadu";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Field";
    featured = true;
  } else if (file.includes("BANGALORE - SAI NSSC")) {
    title = "SAI NSSC Bangalore Athletics Track";
    city = "Bangalore";
    state = "Karnataka";
    sport = "Athletics Track";
    governingBody = "World Athletics";
    standard = "World Athletics / IAAF Track";
    featured = true;
  } else if (file.includes("LUCKNOW SAI CENTRE")) {
    title = "SAI Regional Centre Athletics Track";
    city = "Lucknow";
    state = "Uttar Pradesh";
    sport = "Athletics Track";
    governingBody = "World Athletics";
    standard = "World Athletics Class 2";
    featured = true;
  } else if (file.includes("KALINGA STADIUM PITCH -2")) {
    title = "Kalinga Hockey Stadium – Pitch 2";
    city = "Bhubaneswar";
    state = "Odisha";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Category 1 · World Cup 2023";
  } else if (file.includes("Major Dhyan Chand") && file.includes("FOP 2")) {
    title = "Major Dhyan Chand National Stadium – FOP 2";
    city = "New Delhi";
    state = "Delhi";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Global Category Field";
  } else if (file.includes("IAAF") || file.includes("CLASS-2") || file.includes("WA CLASS-2") || file.includes("TRACK") || file.includes("CLASS - 2")) {
    sport = "Athletics Track";
    governingBody = file.includes("IAAF") ? "IAAF" : "World Athletics";
    standard = "World Athletics / IAAF Class 2";
    
    if (file.includes("BAREILLY")) { title = "Bareilly Synthetic Athletics Track"; city = "Bareilly"; state = "Uttar Pradesh"; }
    else if (file.includes("BELAGAVI")) { title = "Belagavi Athletics Track"; city = "Belagavi"; state = "Karnataka"; }
    else if (file.includes("BHOPAL")) { title = "Bhopal Synthetic Athletics Track"; city = "Bhopal"; state = "Madhya Pradesh"; }
    else if (file.includes("BILASPUR WA")) { title = "Bilaspur Athletics Track"; city = "Bilaspur"; state = "Chhattisgarh"; }
    else if (file.includes("GODHRA")) { title = "Godhra Synthetic Athletics Track"; city = "Godhra"; state = "Gujarat"; }
    else if (file.includes("IMPHAL")) { title = "Imphal Synthetic Athletics Track"; city = "Imphal"; state = "Manipur"; }
    else if (file.includes("VALSURA")) { title = "INS Valsura Naval Athletics Track"; city = "Jamnagar"; state = "Gujarat"; }
  } else if (file.includes("CHANDIGARH - PU")) {
    title = "Panjab University Campus Track & Sports Grounds";
    city = "Chandigarh";
    state = "Punjab / UT";
    sport = "Multi-Sport";
    governingBody = "National Standards";
    standard = "Accredited University Facility";
  } else if (file.includes("GWALIOR")) {
    title = "Madhya Pradesh Women's Hockey Academy";
    city = "Gwalior";
    state = "Madhya Pradesh";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Hockey Turf";
  } else if (file.includes("HAZARIBAGH")) {
    title = "Hazaribagh Hockey Stadium";
    city = "Hazaribagh";
    state = "Jharkhand";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Field";
  } else if (file.includes("KURUKSHETRA")) {
    title = "Dronacharya Stadium Hockey Turf";
    city = "Kurukshetra";
    state = "Haryana";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Hockey Turf";
  } else if (file.includes("DEHRADUN")) {
    title = "Maharana Pratap Sports College";
    city = "Dehradun";
    state = "Uttarakhand";
    sport = "Athletics Track";
    governingBody = "World Athletics";
    standard = "Accredited Athletics Facility";
  } else if (file.includes("FARIDABAD")) {
    title = "Faridabad Hockey Turf Facility";
    city = "Faridabad";
    state = "Haryana";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Field";
  } else if (file.includes("GOA - PEDDEM")) {
    title = "Peddem Sports Complex";
    city = "Mapusa / Peddem";
    state = "Goa";
    sport = "Multi-Sport";
    governingBody = "National Games Standard";
    standard = "National Games Accredited";
  } else if (file.includes("SRINAGAR - NIT")) {
    title = "NIT Srinagar Sports Complex & Track";
    city = "Srinagar";
    state = "Jammu & Kashmir";
    sport = "Athletics Track";
    governingBody = "National Standards";
    standard = "All-Weather Sports Facility";
  } else if (file.includes("HTC -")) {
    sport = "Hockey";
    governingBody = "FIH";
    standard = "Hockey Training Centre (HTC) Accredited";
    if (file.includes("BALSANKARA")) { title = "HTC Balsankara Saunamara"; city = "Sundargarh"; state = "Odisha"; }
    else if (file.includes("GHANSARA")) { title = "HTC Ghansara"; city = "Sundargarh"; state = "Odisha"; }
    else if (file.includes("KUTRA")) { title = "HTC Kutra (Bheluadihi)"; city = "Sundargarh"; state = "Odisha"; }
    else if (file.includes("MANCHAMARA")) { title = "HTC Manchamara"; city = "Sundargarh"; state = "Odisha"; }
  } else if (file.includes("BHOPAL_MAYUR_PARK")) {
    title = "Mayur Park Hockey Stadium";
    city = "Bhopal";
    state = "Madhya Pradesh";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Field";
  } else if (file.includes("DANAPUR")) {
    title = "Danapur Military Cantonment Hockey Turf";
    city = "Danapur / Patna";
    state = "Bihar";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Field";
  } else if (file.includes("BILASPUR  HOCKEY")) {
    title = "Bilaspur International Hockey Stadium";
    city = "Bilaspur";
    state = "Chhattisgarh";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Field";
  } else if (file.includes("CHANDRAPUR")) {
    title = base.replace(/-/g, ' ');
    city = "Chandrapur";
    state = "Maharashtra";
    sport = "Multi-Sport";
    governingBody = "National Standards";
    standard = "Certified Ground";
  } else if (file.includes("KOKRAJHAR")) {
    title = "Kokrajhar SAI Hockey Stadium";
    city = "Kokrajhar";
    state = "Assam";
    sport = "Hockey";
    governingBody = "FIH";
    standard = "FIH Certified Field";
  } else if (file.includes("LUCKNOW - PAC 35")) {
    title = "35th Battalion PAC Mahanagar Sports Field";
    city = "Lucknow";
    state = "Uttar Pradesh";
    sport = "Athletics Track";
    governingBody = "State / National Standards";
    standard = "Certified Running Track";
  } else if (file.includes("JAMSHEDPUR")) {
    title = "JRD Tata Sports Complex / Jamshedpur Track";
    city = "Jamshedpur";
    state = "Jharkhand";
    sport = "Athletics Track";
    governingBody = "World Athletics";
    standard = "Accredited Athletics Facility";
  } else if (file.includes("DWARKA - NSUT")) {
    title = "Netaji Subhas University of Technology (NSUT)";
    city = "Dwarka, New Delhi";
    state = "Delhi";
    sport = "Multi-Sport";
    governingBody = "National Standards";
    standard = "Accredited Campus Sports Facility";
  } else if (file.includes("SONIPAT MNSS")) {
    title = "Motilal Nehru School of Sports (MNSS) Rai";
    city = "Sonipat";
    state = "Haryana";
    sport = "Athletics Track";
    governingBody = "National Standards";
    standard = "Specialized Sports School Facility";
  } else if (file.includes("IDUKKI")) {
    title = "Nedumkandam High Altitude Stadium";
    city = "Idukki";
    state = "Kerala";
    sport = "Athletics Track";
    governingBody = "National Standards";
    standard = "High Altitude Athletic Surface";
  } else if (file.includes("KANNUR")) {
    title = "Kannur Sports Facility";
    city = "Kannur";
    state = "Kerala";
    sport = "Athletics Track";
    governingBody = "National Standards";
    standard = "Synthetic Track Surface";
  } else if (file.includes("MADURAI")) {
    title = "Madurai Sports Complex";
    city = "Madurai";
    state = "Tamil Nadu";
    sport = "Athletics Track";
    governingBody = "World Athletics";
    standard = "Certified Sports Surface";
  } else if (file.includes("MAHENDERGARH")) {
    title = "Mahendergarh Sports Stadium";
    city = "Mahendergarh";
    state = "Haryana";
    sport = "Athletics Track";
    governingBody = "State / National Standards";
    standard = "Certified Track Facility";
  } else if (file.includes("NARWANA")) {
    title = "Narwana Sports Stadium";
    city = "Narwana";
    state = "Haryana";
    sport = "Athletics Track";
    governingBody = "State Standards";
    standard = "Certified Surface";
  } else if (file.includes("SHEOPUR")) {
    title = "Sheopur Sports Stadium";
    city = "Sheopur";
    state = "Madhya Pradesh";
    sport = "Multi-Sport";
    governingBody = "State Standards";
    standard = "Certified Sports Surface";
  } else if (file.includes("TAMANDO")) {
    title = "Tamando High Performance Centre";
    city = "Bhubaneswar";
    state = "Odisha";
    sport = "Multi-Sport";
    governingBody = "National Standards";
    standard = "State High Performance Center";
  }

  return {
    id: slug,
    slug,
    title,
    city,
    state,
    sport,
    governingBody,
    standard,
    pdfUrl: `/certificates/${encodeURIComponent(file)}`,
    previewImage: `/certificates/previews/${slug}.png`,
    fileName: file,
    featured
  };
});

// Put featured first
certificates.sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  return a.title.localeCompare(b.title);
});

const tsContent = `// AST Accredited Testing & Certificates Registry
// Generated from public/certificates/

export interface ASTCertificate {
  id: string;
  slug: string;
  title: string;
  city: string;
  state: string;
  sport: "Hockey" | "Athletics Track" | "Multi-Sport";
  governingBody: string;
  standard: string;
  pdfUrl: string;
  previewImage: string;
  fileName: string;
  featured?: boolean;
}

export const astCertificates: ASTCertificate[] = ${JSON.stringify(certificates, null, 2)};

export const featuredCertificates = astCertificates.filter(c => c.featured);

export const certificateStats = {
  totalCertificates: astCertificates.length,
  fihCertifiedTurfs: astCertificates.filter(c => c.governingBody === "FIH" || c.sport === "Hockey").length,
  worldAthleticsTracks: astCertificates.filter(c => c.governingBody.includes("Athletics") || c.governingBody.includes("IAAF") || c.sport === "Athletics Track").length,
  statesCovered: 18,
};
`;

fs.writeFileSync(path.join(__dirname, '..', 'content', 'certificates-data.ts'), tsContent);
console.log('Successfully wrote content/certificates-data.ts');
