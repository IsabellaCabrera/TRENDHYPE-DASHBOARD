export enum Attribute2 {
  "image" = "image",
  "quicksearchtext" = "quicksearchtext",
  "moodtext" = "moodtext",
  "profileimage" = "profileimage",
  "profilename" = "profilename",
  "profiledescription" = "profiledescription",
  "followerscount" = "followerscount",
  "likescount" = "likescount"
}

class todaysMood extends HTMLElement {
  image?: string;
  quicksearchtext?: string;
  moodtext?: string;
  profileimage?: string;
  profilename?: string;
  profiledescription?: string;
  followerscount?: number;
  likescount?: number;

  static get observedAttributes() {
      return Object.keys(Attribute2);
  }

  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
  }

  attributeChangedCallback(propName: Attribute2, oldValue: string | undefined, newValue: string | undefined) {
      switch (propName) {
          case Attribute2.followerscount:
              this.followerscount = newValue ? Number(newValue) : undefined;
              break;
          case Attribute2.likescount:
              this.likescount = newValue ? Number(newValue) : undefined;
              break;

              default:
              this[propName] = newValue;
  }
  this.render();
}

  render() {
      if (this.shadowRoot) {
          this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div class="main-container">
              <!-- Quick Search Section -->
              <div class="quick-search">
                <h3>${this.quicksearchtext || 'QUICK SEARCH'}</h3>
                <div class="search-bar">
                  <input type="text" placeholder="Type here to search" />
                  <button><i class="fa fa-search"></i></button>
                </div>
              </div>

              <!-- Today's Mood Section -->
              <div class="mood-section">
                <p>${this.moodtext || "today's mood"}</p>
              </div>

              <!-- Profile Section -->
              <div class="profile-section">
                <h4>Profile</h4>
                <div class="profile-info">
                  <img src="${this.profileimage || 'default_profile_image.png'}" alt="Profile Picture" />
                  <h2>${this.profilename || 'Jeanalomia'}</h2>
                  <p>${this.profiledescription || 'Chasing dreams and making memories'}</p>
                </div>
                <div class="profile-stats">
                  <div class="followers">
                    <i class="fa-solid fa-user fa-beat" style="color: #e2d34b;"></i>
                    <span>${this.followerscount || '500k'}</span>
                  </div>
                  <div class="likes">
                    <i class="fa-solid fa-heart fa-beat" style="color: #e2d34b;"></i>
                    <span>${this.likescount || '2M'}</span>
                  </div>
                </div>
              </div>
            </div>


            <style>
            
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        @font-face {
            font-family: 'Relationship of Melodrama';
            src: url('path_to_your_font/relationship-of-melodrama.woff2') format('woff2'), 
                url('path_to_your_font/relationship-of-melodrama.woff') format('woff');
        }
                

        .main-container {
          display: flex;
          flex-direction: column;
         justify-content: space-evenly;
             align-items: center;

          width: 270px; /* Reduce the width */
          height:600px;
          margin-top:2rem;

          padding: 30px; /* Adjust the padding to make the container smaller */
          background-color: rgba(52, 49, 9, 1);
          color: white;
          font-family: 'Poppins', sans-serif;

        }

        /* Quick Search */
        .quick-search h3 {
          font-weight: 600;
          font-size: 14px; /* Reduce font size */
          margin-bottom: 8px; /* Adjust margin */
        }

        .search-bar {
          display: flex;
          background-color: #e5e4d0;
          padding: 10px; /* Reduce padding */
          border-radius: 12px; /* Slightly smaller border radius */
           width:260px;

        }

        .search-bar input {
          border: none;
          background: none;
          width:200px;
          font-size: 12px; /* Reduce font size */
          color: #5f5f4e;
        }

        .search-bar button {
          background: none;
          border: none;
          cursor: pointer;
          color: #5f5f4e;
          font-size: 14px; /* Reduce font size */
        }

        /* Today's Mood */
        .mood-section {

          background-color: #b2581c;
          padding: 15px; /* Reduce padding */
          text-align: center;
          border-radius: 16px; /* Reduce border radius */
          margin: 15px 0; /* Adjust margins */
          width:260px;
          height:350px;
          font-family: 'Playfair Display', serif; 
        }

        .mood-section p {
          font-family: 'Relationship of Melodrama', cursive;
          font-size:25px; /* Reduce font size */
          color: rgba(226, 211, 75, 1);
          font-family: 'Playfair Display', serif; 
        }

        /* Profile Section */
        .profile-section {
          background-color: #c8d1e1;
          border-radius: 16px; /* Reduce border radius */
          text-align: center;
                    margin: 15px 0; /* Adjust margins */

          width:260px;
          height:1000px;

        }

        .profile-info img {
          width: 80px; /* Reduce size of profile image */
          height: 80px; /* Reduce size */
          border-radius: 50%;
          margin-bottom: 8px; /* Adjust margin */
        }

        .profile-info h2 {
          font-weight: 600;
          font-size: 16px; /* Reduce font size */
          color: #2f2d17;
        }

        .profile-info p {
          font-weight: 400;
          color: #2f2d17;
          font-size: 12px; /* Reduce font size */
        }

        /* Profile Stats */
        .profile-stats {
          display: flex;
          justify-content: space-around;
          background-color:rgba(154, 83, 17, 1);
          width:260px;
          height:30%;
           border-bottom-left-radius: 16px; /* Round the bottom left corner */
            border-bottom-right-radius: 16px; /* Round the bottom right corner */
        }

        .followers, .likes {
          display: flex;
          align-items: center;
          gap: 4px; /* Adjust gap between icon and text */
        }

        .followers span, .likes span {
          font-weight: 600;
          font-size: 24px; /* Reduce font size */
          color: rgba(226, 211, 75, 1);

          .fa-solid fa-heart fa-beat{

          border: solid black
          }
        }

      </style>

          `; // end innerHTML
      }
  }
}

customElements.define('todays-mood', todaysMood);
export default todaysMood;
