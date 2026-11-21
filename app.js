const todo = (t) => `<p class="todo">${t}</p>`;
const section = (h, hint) => `<h2>${h}</h2>${todo(hint || "Add your content here.")}`;
const outline = (items) => items.map((i) => (Array.isArray(i) ? section(i[0], i[1]) : section(i))).join("");
const cards = (items) => `<div class="cards">${items.map(([s, t, d]) => `<a class="card" href="#/${s}"><strong>${t}</strong>${d ? `<br>${d}` : ""}</a>`).join("")}</div>`;
const page = (title, sub, body, quote) => ({ title, sub, body, quote });
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const ol = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
const draftNote = `<p class="todo"><strong>Draft, proposed organisation.</strong> The Boyer Legacy Foundation is not yet incorporated or registered as a charity, and this is not legal advice. Do not rely on it until reviewed by an Australian not-for-profit lawyer.</p>`;

const homePage = (name, years) => page(name, "Where the road led us home", `
  <h2>At a Glance</h2>
  <ul><li>Years: ${years}</li><li>Seasons: Childhood / Holidays / Gatherings</li><li>Vibe: ____</li></ul>
  ${section("Gallery", "Add photos with captions.")}
  ${section("The Story", "How we came here · days and seasons · favourite corners · what this place taught us · what remains today.")}
  ${section("Memory Corner", "One special memory · one lesson learned · one thing that always reminds us of here.")}`);

// Edit page content here. Keys are the URL slugs (#/slug).
const pages = {
  home: {
    title: "By the Tide, We Stand",
    sub: "Three Homes, One Legacy",
    hero: true,
    quote: "Home is not always a place. Sometimes it is a memory.",
    body: `
      ${section("Welcome", "Add your welcome message here.")}
      ${section("About the Book", "Add a short book overview here.")}
      <blockquote>Add a featured quote from the book here.</blockquote>
      <h2>Explore</h2>
      ${cards([
        ["the-book", "The Book", "Overview, excerpt and where to buy."],
        ["our-three-homes", "Our Three Homes", "The places that shaped us."],
        ["our-legacy", "Our Legacy", "Crest, lineage, oath and treasures."],
        ["share-your-story", "Share Your Story", "Your places, your legacy."]
      ])}
      ${section("Latest News", "Latest news and updates will appear here.")}`
  },

  "the-book": page("The Book", "By the Tide, We Stand", cards([
    ["book-about", "About the Book"], ["book-contents", "Table of Contents"], ["book-excerpt", "Read an Excerpt"],
    ["book-author", "About the Author"], ["book-purchase", "Purchase"]])),
  "book-about": page("The Story Behind the Book", "Why this book was written", outline([
    ["Why This Book Was Written"], ["Who It's For and What It Offers"], ["Core Themes", "Home, memory, legacy, family."], ["Closing Invitation"]])),
  "book-contents": page("Table of Contents", "Full chapter list", outline([
    ["Introduction"], ["Part One: First Home"], ["Part Two: Second Home"], ["Part Three: Third Home"], ["Closing"],
    ["Format & Reading Time", "Estimated reading time and format info."]])),
  "book-excerpt": page("A Page From the Book", "Foreword & selected pages", outline([
    ["Context", "Short intro to the passage."], ["The Excerpt"], ["Closing Thought"]]) +
    `<p><a class="btn" href="#/book-purchase">Purchase →</a></p>`),
  "book-author": page("The Heart Behind the Words", "Hannah Jade Boyer", `
    <p>Hannah Jade Boyer is the author of <em>By the Tide, We Stand</em>, a Royal Australian Navy veteran and a South East Queensland local.</p>` +
    outline([["Photo & Bio"], ["Connection to the Story"], ["What Writing This Journey Meant"], ["A Personal Note to Readers"]])),
  "book-purchase": page("Bring This Story Home", "Where to buy & editions available", outline([
    ["Editions", "Paperback · eBook · Keepsake Edition."], ["What's Included"], ["Price & Ordering"], ["Shipping & Delivery Times"], ["Secure Checkout Note"]])),

  "our-three-homes": page("Our Three Homes", "The places that shaped us", cards([
    ["home-landsborough", "🌲 Landsborough", "Where I grew up."],
    ["home-golden-beach", "🦢 Golden Beach–Pelican Waters", "Where my parents live."],
    ["home-brassall", "🌿 Brassall", "Where I build my home."],
    ["journey-map", "🗺️ Our Journey Map", "How the three places connect."]])),
  "home-landsborough": homePage("Landsborough", "____"),
  "home-golden-beach": homePage("Golden Beach–Pelican Waters", "____"),
  "home-brassall": homePage("Brassall", "____"),
  "journey-map": page("Our Journey Map", "How the three places connect", outline([
    ["Map", "Add a visual map connecting the 3 locations."], ["Timeline", "When we lived in each place."], ["The Journey Between Them"]]),
    "They are not just three houses — they are one home, in three chapters."),

  "our-legacy": page("Our Legacy", "Symbols, roots and promises", cards([
    ["legacy-crest", "Family Crest & Heraldry"], ["legacy-lineage", "Lineage & Ancestry"], ["legacy-oath", "The Family Oath"],
    ["legacy-treasures", "Treasures & Talismans"], ["legacy-blessings", "Blessings & Daily Promises"]])),
  "legacy-crest": page("Family Crest", "Symbols & meaning", outline([
    ["The Crest", "Add the crest image."], ["Symbol Meanings", "One by one."], ["Colours and What They Represent"], ["When and How It Came to Be"]]),
    "This is who we are."),
  "legacy-lineage": page("Roots That Run Deep", "Lineage & ancestry", `
    <p>Show deceased ancestors only, and keep details of living people minimal.</p>` +
    `<p><a href="heritage-tree.html">Heritage tree prototype</a></p>` +
    outline([["Visual Tree", "Generations."], ["Key Ancestors", "Brief stories."], ["Places of Origin"], ["How the Threads Came Together"]]),
    "Every name is a story. Every life matters."),
  "legacy-oath": page("The Promises We Keep", "The Family Oath", outline([
    ["The Oath", "Beautifully formatted, centred."], ["What Each Line Means"], ["How We Live It"]]),
    "This is our compass."),
  "legacy-treasures": page("Objects That Carry Memory", "Treasures & Talismans", outline([
    ["Item 1", "Photo, story, meaning."], ["Item 2", "Photo, story, meaning."], ["Item 3", "Photo, story, meaning."]]),
    "They are just things — until they carry love."),
  "legacy-blessings": page("Words We Live By", "Blessings & Daily Promises", outline([
    ["Morning Blessing"], ["Evening Reflection"], ["Daily Promises", "Short and clear."], ["In Times of Difficulty"], ["In Gratitude"]]),
    "Words that anchor us."),

  "share-your-story": page("Share Your Story", "Your places, your legacy", cards([
    ["share-places", "Your Three Places"], ["share-writing", "Legacy Writing Guide"], ["guestbook", "Guestbook"], ["contact", "Contact Us"]])),
  "share-places": page("Where Does Your Heart Call Home?", "Your Three Places", outline([
    ["Describe Your Three Places"], ["What Makes Them Special?"], ["What Did They Teach You?"]]) +
    `<p class="todo">The submission form needs a backend (for example Formspree or Netlify Forms) before it works.</p>`),
  "share-writing": page("How to Tell Your Story", "Legacy Writing Guide", outline([
    ["Gentle Prompts and Questions"], ["Don't Worry About Perfection"], ["Just Begin", "One memory at a time."], ["Simple Structure Tips"]]),
    "Your story is worth telling — exactly as it is."),
  guestbook: page("You Are Here", "Guestbook", `
    <h2>Messages</h2>${todo("Approved visitor messages will appear here.")}
    <h2>Leave a Note</h2>
    <p>Messages are not stored yet. This form needs a backend (for example Formspree or Netlify Forms) before it works.</p>
    <form onsubmit="event.preventDefault(); alert('Form not connected yet.');">
      <label>Name<input required></label>
      <label>Message<textarea rows="5" required></textarea></label>
      <button class="btn">Send</button>
    </form>`, "Your words become part of our story too."),
  contact: page("Let's Connect", "Contact", `
    <p>I'd love to hear from you.</p>
    <p>Email: <a href="mailto:publishing@houseofdeboyer.com">publishing@houseofdeboyer.com</a></p>
    <p>Postal: PO Box 5026, Brassall QLD 4305, Australia</p>
    ${todo("Optional: add social media links and a response-time note.")}`, "I read every word."),

  "news-updates": page("News & Updates", "Book news, notes and press", cards([
    ["news-announcements", "Announcements"], ["news-blog", "From the Author"], ["news-press", "Press & Media"]])),
  "news-announcements": page("News & Announcements", "Book news & events", outline([
    ["Latest", "Newest at top, dated. Book news, events, milestones."], ["Subscribe"]])),
  "news-blog": page("Thoughts Along the Journey", "Author's Blog", outline([
    ["Post Title & Date", "Short excerpt or full post, with previous / next post links."]]), "Writing this book taught me…"),
  "news-press": page("In Other Words", "Press & Media", outline([
    ["Interviews, Features, Reviews", "Each with source, date and link. Highlight quotes."]])),

  resources: page("Resources", "Extras for readers", cards([
    ["res-downloads", "Downloads"], ["res-guide", "Reading Guide"], ["faq", "FAQ"]])),
  "res-downloads": page("Downloads", "Free, for personal use only", outline([
    ["Family Tree Template", "PDF."], ["Legacy Journal Pages", "Printable."], ["Family Crest", "High-res version."], ["Blessings & Promises", "Card version."]])),
  "res-guide": page("Reading Guide", "Discussion prompts & reflections", outline([
    ["For Individuals"], ["For Families & Book Groups"], ["Discussion Questions per Section"], ["Reflection Prompts"]]),
    "Read it slowly. Savour it."),
  faq: page("FAQ", "Frequently asked questions", outline([
    ["Why three homes?"], ["Can I share excerpts?"], ["Will there be a sequel?"], ["How do I submit my story?"], ["Shipping & delivery"]]) +
    `<p>More questions? <a href="#/contact">Contact us</a>.</p>`),

  privacy: page("Privacy Policy", "Legal", outline([
    ["What We Collect", "Keep it minimal."], ["How We Use It"], ["No Third-Party Sharing"], ["Your Rights"], ["Contact for Questions"]])),
  terms: page("Terms of Use", "Legal", `
    <p>Unless otherwise stated, content is © House of De Boyer™ and licensed under CC BY-NC-ND 4.0.</p>` +
    outline([["Site Purpose", "Personal, not commercial."], ["Your Stories = Your Property"], ["Guestbook Conduct"], ["Liability Limitations"]])),
  foundation: page("The Boyer Legacy Foundation", "Proposed establishment: 21 November 2026 · Brisbane, Queensland", `
    ${draftNote}
    <p>Seven generations. One legacy. Forever remembered.</p>
    ${cards([
      ["fnd-constitution", "Constitution Adoption", "Page 39"], ["fnd-conflicts", "Conflict of Interest", "Page 40"],
      ["fnd-child-safety", "Child Safety", "Page 41"], ["fnd-complaints", "Complaints & Whistleblower", "Page 42"],
      ["fnd-risk", "Risk, Insurance & Continuity", "Page 43"], ["fnd-fundraising", "Grants & Fundraising", "Page 44"],
      ["fnd-registration", "Charity Registration", "Page 45"], ["fnd-international", "International Partnerships", "Page 46"],
      ["fnd-checklist", "Registration Readiness Checklist"]])}`,
    "We honour those who came before, protect those who walk beside us and create opportunities for those who are yet to come."),

  "fnd-constitution": page("Constitution Adoption & Execution", "Establishing the Foundation's governing authority", `
    ${draftNote}
    <h2>Constitutional documents</h2>
    ${ul(["Foundation name and legal identity", "Charitable purposes and objects", "Not-for-profit provisions", "Membership eligibility and voting rights",
      "Council composition and appointment", "Responsible Person duties", "Meeting and voting procedures", "Financial management provisions",
      "Conflict-of-interest requirements", "Amendment procedures", "Winding-up and asset distribution provisions"])}
    <h2>Founding resolution</h2>
    ${ul(["Establish the proposed organisation", "Approve its charitable mission", "Adopt the final governing document", "Appoint the initial governing body",
      "Authorise applications for incorporation and charity registration", "Authorise opening an organisational bank account after establishment"])}
    <h2>Adoption record</h2>
    ${todo("Date of adoption, meeting location and founding signatories are recorded on the signed paper copy, not on this website.")}
    <h2>Formal status</h2>
    <p>The Constitution becomes operative only after valid adoption under the applicable legal requirements. This draft is not evidence of incorporation or registration.</p>`),

  "fnd-conflicts": page("Conflict of Interest & Related-Party Policy", "Independence · Integrity · Accountability", `
    ${draftNote}
    <h2>Declarations required</h2>
    ${ul(["Business ownership or directorships", "Financial interests", "Family relationships relevant to a decision", "Property interests", "Employment relationships",
      "Personal benefits from Foundation activities", "Other actual, potential or perceived conflicts"])}
    <h2>Conflict register (kept confidential)</h2>
    <p>Person · Interest · Date disclosed · Matter · Action taken · Review date.</p>
    <h2>Management procedure</h2>
    ${ol(["The individual declares the conflict", "The Secretary records it", "The individual leaves the discussion where required", "The individual does not vote",
      "Independent decision-makers assess the proposal", "The outcome is minuted"])}
    <h2>Related-party transactions</h2>
    <p>Dealings with relatives, family businesses, Council members or associated entities need particular scrutiny. The Foundation must show the transaction advances its charitable purposes, the terms are reasonable and documented, the decision is independently assessed and any disclosure duties are met.</p>
    <h2>Prohibited conduct</h2>
    <p>No person may use Foundation funds, information, authority or property for improper personal advantage.</p>`),

  "fnd-child-safety": page("Child Safety & Vulnerable Persons Policy", "Every child deserves safety, dignity & respect", `
    ${draftNote}
    <h2>Scope</h2>
    ${ul(["Family heritage events", "Children's educational programs", "Memorial activities", "Photography and filming", "Oral history interviews", "Digital family platforms", "Volunteers and contractors", "Community partnerships"])}
    <h2>Child-safe principles</h2>
    ${ul(["Put children's safety and wellbeing first", "Respect children's views and dignity", "Provide appropriate supervision", "Set clear conduct expectations",
      "Prevent bullying, harassment and exploitation", "Protect personal information", "Respond promptly to safety concerns"])}
    <h2>Working with children</h2>
    <p>Where activities require it: screening, Queensland Blue Card checks, role suitability assessments, volunteer induction, supervision and incident reporting. Check the legal requirements and exemptions for each activity.</p>
    <h2>Photographs & recordings</h2>
    <p>Images, recordings and stories involving children need appropriate consent and privacy protection. No child's image or story is published just because a family member submitted it.</p>
    <h2>Reporting</h2>
    <p>Suspected abuse, exploitation or serious safety incidents go to the appropriate safeguarding and statutory reporting channels. Emergency danger goes to emergency services (000).</p>
    <h2>Responsibility & review</h2>
    <p>The Council appoints a Child Safety Officer or designated safeguarding contact, and reviews this policy regularly and when legislation changes.</p>`),

  "fnd-complaints": page("Complaints, Disputes & Whistleblower Policy", "A safe voice for every concern", `
    ${draftNote}
    <h2>Complaint categories</h2>
    ${ul(["Governance concerns", "Financial misconduct", "Conflicts of interest", "Bullying or harassment", "Privacy breaches", "Heritage disputes", "Unauthorised publication",
      "Discrimination", "Child safety concerns", "Misuse of Foundation resources"])}
    <h2>Procedure</h2>
    ${ol(["Receipt and acknowledgement", "Initial assessment and risk screening", "Appointment of an impartial reviewer", "Collection of relevant evidence",
      "Opportunity for affected parties to respond", "Findings and recommendations", "Written outcome and corrective action"])}
    <p>Complaints go in writing to the designated Complaints Officer, or to an independent Council contact if the complaint concerns that officer.</p>
    <h2>Confidentiality & non-retaliation</h2>
    <p>Information is shared only with those who reasonably need it, subject to legal obligations. No one suffers retaliation for raising a genuine concern in good faith.</p>
    <h2>Whistleblower protection</h2>
    <p>Legal advice will be obtained on whether statutory protections apply. The internal policy provides a protected pathway either way.</p>
    <h2>External escalation</h2>
    <p>Depending on the issue: ACNC, police, safeguarding authorities, privacy regulators or other appropriate bodies.</p>`),

  "fnd-risk": page("Risk, Insurance & Continuity Policy", "Protecting the Foundation's people, property & purpose", `
    ${draftNote}
    <h2>Risk register categories</h2>
    ${ul(["Financial: fraud, theft or mismanagement", "Governance: conflicts or improper decisions", "Legal: non-compliance", "Privacy: unauthorised disclosure",
      "Cybersecurity: account compromise or data loss", "Heritage: loss or deterioration of records", "Property: damage to memorial or heritage sites",
      "Safeguarding: harm to children or vulnerable people", "Operational: loss of key volunteers", "Reputation: inaccurate public statements"])}
    <p>Each risk is assessed for likelihood, consequences, existing controls, extra safeguards, responsible officer and review date.</p>
    <h2>Insurance to investigate</h2>
    ${ul(["Public liability", "Directors and officers liability", "Volunteer personal accident", "Professional indemnity, where relevant", "Cyber insurance", "Property and equipment", "Event insurance"])}
    <h2>Continuity</h2>
    ${ul(["Secure backup records", "Emergency contact procedures", "Financial access controls", "Alternative authorised signatories", "Document recovery procedures", "Succession for key positions"])}`),

  "fnd-fundraising": page("Grants, Sponsorships & Fundraising Policy", "Responsible giving · Sustainable heritage", `
    ${draftNote}
    <h2>Funding sources</h2>
    ${ul(["Individual donations", "Corporate sponsorships", "Philanthropic foundations", "Government grants", "Community fundraising", "Approved fundraising events", "Bequests", "Eligible charitable partnerships"])}
    <h2>Grant applications</h2>
    <p>Include applicant details, charitable purpose, project description, budget, public-benefit outcomes, timetable, evaluation measures, and governance and financial information.</p>
    <h2>Sponsorship</h2>
    <p>Agreements identify the contribution, recognition, deliverables, duration, intellectual property, termination rights and any conflicts. Sponsors do not control the Foundation's governance decisions.</p>
    <h2>Fundraising controls</h2>
    <p>Fundraising must be accurately represented, name the intended beneficiary, explain relevant costs, respect donor conditions, keep records and comply with Australian and Queensland requirements. Check permits before public appeals, raffles, gaming-related fundraising or collections.</p>
    <h2>Lil Thos Memorial Fund</h2>
    <p>Appeals must clearly state the purpose and intended use of donations. Don't promise tax deductions without the appropriate DGR status, and keep any "100% to projects" promise only if administration costs are genuinely funded separately.</p>`),

  "fnd-registration": page("Australian Charity Registration & Compliance", "From family vision to registered organisation", `
    ${draftNote}
    <h2>Legal structure options</h2>
    <p><strong>Queensland incorporated association:</strong> may suit an organisation operating mainly in Queensland.</p>
    <p><strong>Public company limited by guarantee:</strong> may suit a charity operating nationally or internationally (ASIC incorporation).</p>
    <p>Choose the structure with an Australian not-for-profit lawyer or qualified adviser.</p>
    <h2>Registration sequence</h2>
    ${ol(["Confirm charitable purposes", "Select the legal structure", "Check the proposed name", "Prepare and approve the governing document", "Appoint eligible Responsible People",
      "Incorporate", "Obtain an ABN where eligible", "Set up organisational financial accounts", "Apply to the ACNC for charity registration",
      "Apply separately to the ATO for charity tax concessions", "Investigate DGR eligibility separately", "Establish financial, privacy and safeguarding procedures"])}
    <h2>Ongoing obligations</h2>
    <p>Accurate records, governance minutes, financial records, conflict registers, insurance, annual reporting, required notifications and fundraising compliance. ACNC classes charities by revenue: small (under $500,000), medium ($500,000–$2,999,999) and large ($3 million or more). Confirm the current thresholds and report requirements on acnc.gov.au.</p>
    <h2>Important</h2>
    <p>Charity registration, tax concessions and DGR endorsement are separate. The Foundation must not describe itself as registered, tax-exempt or tax-deductible until each approval is granted. It must also show genuine public benefit, not just private family benefit.</p>`),

  "fnd-international": page("International Family Heritage Partnerships", "Australia · United Kingdom · worldwide family connections", `
    ${draftNote}
    <h2>Possible partners</h2>
    ${ul(["Historical societies", "Genealogical organisations", "Museums and archives", "Libraries", "Universities", "Cultural institutions", "Heritage preservation groups", "Community organisations"])}
    <h2>Overseas family branches may</h2>
    ${ul(["Submit historical records", "Take part in research", "Contribute oral histories", "Nominate heritage projects", "Join family gatherings", "Support approved educational initiatives"])}
    <h2>Safeguards</h2>
    <p>Cross-border records follow privacy, copyright, archival and data-transfer rules. The Foundation respects local laws and cultural protocols. Partnership agreements cover purpose, responsibilities, funding, ownership of contributed material, publication permissions, data protection, dispute resolution and termination. Overseas spending is documented, authorised and assessed for legal, tax and sanctions risk.</p>`),

  "fnd-checklist": page("Registration Readiness Checklist", "The Boyer Legacy Foundation · Queensland", `
    ${draftNote}
    <h2>1. Legal establishment</h2>
    ${ul(["Confirm legal structure", "Check name availability", "Prepare the final Constitution", "Confirm charitable purposes and public-benefit activities", "Appoint the initial governing body",
      "Get written acceptance from officeholders", "Complete incorporation", "Obtain an ABN where eligible"])}
    <h2>2. ACNC registration</h2>
    ${ul(["Prepare the application and governing document", "Describe each charitable purpose and how it delivers public benefit", "Provide Responsible People details",
      "Confirm not-for-profit operation and winding-up provisions", "Submit supporting information and answer ACNC requests"])}
    <h2>3. ATO concessions</h2>
    ${ul(["Apply for charity tax concessions", "Assess income tax, GST and FBT concessions", "Investigate DGR endorsement separately", "Set up donation receipt procedures"])}
    <h2>4. Operations</h2>
    ${ul(["Open a bank account", "Set up accounting software and restricted-fund records", "Adopt privacy, child safety, conflict and complaints policies", "Arrange insurance", "Set up secure archival storage"])}
    <h2>5. Public launch</h2>
    ${ul(["Publish the mission statement", "Publish registration details once granted", "Publish donation terms and privacy and contact policies", "Set up the project nomination process", "Prepare the first annual operating plan"])}
    <p>Official guidance: <a href="https://www.acnc.gov.au/for-charities/start-charity">ACNC: starting a charity</a> · <a href="https://www.ato.gov.au/businesses-and-organisations/not-for-profit-organisations">ATO: not-for-profit organisations</a> · <a href="https://www.asic.gov.au/for-business-and-companies/nfps-and-charities/">ASIC: not-for-profits and charities</a></p>`),

  sitemap: null
};

const menu = [
  { label: "Home", slug: "home" },
  { label: "The Book", slug: "the-book", kids: ["book-about", "book-contents", "book-excerpt", "book-author", "book-purchase"] },
  { label: "Our Three Homes", slug: "our-three-homes", kids: ["home-landsborough", "home-golden-beach", "home-brassall", "journey-map"] },
  { label: "Our Legacy", slug: "our-legacy", kids: ["legacy-crest", "legacy-lineage", "legacy-oath", "legacy-treasures", "legacy-blessings"] },
  { label: "Share Your Story", slug: "share-your-story", kids: ["share-places", "share-writing", "guestbook", "contact"] },
  { label: "News & Updates", slug: "news-updates", kids: ["news-announcements", "news-blog", "news-press"] },
  { label: "Resources", slug: "resources", kids: ["res-downloads", "res-guide", "faq"] },
  { label: "Foundation", slug: "foundation", kids: ["fnd-constitution", "fnd-conflicts", "fnd-child-safety", "fnd-complaints", "fnd-risk", "fnd-fundraising", "fnd-registration", "fnd-international", "fnd-checklist"] },
  { label: "Legal", slug: "legal", kids: ["privacy", "terms", "sitemap"] }
];

pages.legal = page("Legal", "", cards([["privacy", "Privacy Policy"], ["terms", "Terms of Use"], ["sitemap", "Site Map"]]));
const titleOf = (s) => (s === "sitemap" ? "Site Map" : pages[s].title);

pages.sitemap = page("Site Map", "Every page, by section", `<ul>${menu.map((m) =>
  `<li><a href="#/${m.slug}">${m.label}</a>${m.kids ? `<ul>${m.kids.map((k) => `<li><a href="#/${k}">${titleOf(k)}</a></li>`).join("")}</ul>` : ""}</li>`).join("")}</ul>`);

// Reading order and parent lookup for breadcrumbs and prev/next links
const order = [];
const parent = {};
menu.forEach((m) => {
  order.push(m.slug);
  (m.kids || []).forEach((k) => { order.push(k); parent[k] = m; });
});
const threeHomes = ["home-landsborough", "home-golden-beach", "home-brassall"];

const nav = document.getElementById("nav");
nav.innerHTML = menu.map((m) => m.kids
  ? `<div class="group"><a href="#/${m.slug}" data-slug="${m.slug}">${m.label}</a><div class="drop">${m.kids.map((k) => `<a href="#/${k}" data-slug="${k}">${titleOf(k)}</a>`).join("")}</div></div>`
  : `<a href="#/${m.slug}" data-slug="${m.slug}">${m.label}</a>`).join("");

document.getElementById("footer").innerHTML =
  `<p class="footer-quote">“Home is not always a place. Sometimes it is a memory.”</p>
   <div>${["home", "contact", "privacy", "terms", "sitemap"].map((s) => `<a href="#/${s}">${s === "home" ? "Home" : titleOf(s)}</a>`).join("")}</div>
   <p>© 2026 Three Homes — One Legacy • Brisbane, QLD</p>`;

const toggle = document.getElementById("menu-toggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

function breadcrumb(slug) {
  if (slug === "home") return "";
  const p = parent[slug];
  const parts = [`<a href="#/home">Home</a>`];
  if (p) parts.push(`<a href="#/${p.slug}">${p.label}</a>`);
  const cur = pages[slug].title;
  return `<div class="crumbs">${parts.join(" → ")} → ${cur}</div>`;
}

function pager(slug) {
  const i = order.indexOf(slug);
  let prev = order[i - 1], next = order[i + 1], mid = ["home", "Home"];
  if (threeHomes.includes(slug)) {
    const j = threeHomes.indexOf(slug);
    prev = threeHomes[(j + 2) % 3];
    next = threeHomes[(j + 1) % 3];
    mid = ["journey-map", "Journey Map"];
  }
  const link = (s, left) => (s ? `<a href="#/${s}">${left ? "← " : ""}${titleOf(s)}${left ? "" : " →"}</a>` : "<span></span>");
  return `<div class="pager">${link(prev, true)}<a href="#/${mid[0]}">${mid[1]}</a>${link(next, false)}</div>`;
}

function render() {
  const slug = location.hash.replace(/^#\//, "") || "home";
  const p = pages[slug];
  const main = document.getElementById("content");
  if (!p) {
    main.innerHTML = `<h1>Page not found</h1><p><a href="#/home">Return home</a></p>`;
    document.title = "Page not found | By the Tide, We Stand";
    return;
  }
  main.innerHTML = `${breadcrumb(slug)}<div class="${p.hero ? "hero" : ""}"><h1>${p.title}</h1>${p.sub ? `<p class="sub">${p.sub}</p>` : ""}</div>${p.body}${p.quote ? `<blockquote class="center">${p.quote}</blockquote>` : ""}${slug === "home" ? "" : pager(slug)}`;
  document.title = p.title === "By the Tide, We Stand" ? p.title : `${p.title} | By the Tide, We Stand`;
  nav.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.dataset.slug === slug));
  nav.classList.remove("open");
  main.focus();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", render);
render();
