# TravelTrucks
## Desciption

<p>Web application to search for different campers. Here you can easily find the camper you are looking for. We have a lot of categories for filtration, so you can select an engine or transmission, or even the form of your camper, as well as its location.</p>
<p>For detailed information about campers, we provide a page for it, where you can get all the information, for example: what kind of additions that camper has, how much fuel it consumes, check  reviews from real people, and eventually book that camper via the booking form. </p>
<p>Across the website, you can find a loader and other helpful features for better understanding of what exactly the website is doing right now.</p>
<p>I hope, you will like the website. Have a nice day.</p>

### Tech Stack

| Category             | Technology                              |
| -------------------- | --------------------------------------- |
| Framework            | React + Next.js                         |
| Languages            | Typescript (TSX)                        |
| Forms and Validation | Basic form element + action             |
| Rest Api requests    | Axios library, Next routing             |
| CSS                  | CLSX library, modern-normalize          |
| Cash control         | Tanstack Query                          |
| Push notifications   | React hot toast                         |

Others:
 `swiper`,  `spinners-react`, `react-icons`.

### Project Architecture:
```
/
├──app               # Main core of the program where all pages are 
   ├──public routes  # For all users
   ├──api            # Next routing
   ├──others         # Main page, layout, error and loading pages, and so on
├──components        # Frequently used React components
   ├──providers      # TanstackProvider
   ├──sections       # Sections across the project
   ├──ui             # Reusable UI elements
   ├──others         # Folders and components that aren`t in any of the categories above
├──lib               # For API clients and stores
   ├──api            # For API clients and API functions
   ├──providers      # For some providers functions
    constants.ts     # For constant values
├──public            # Public photos and icons
├──types             # For types and interfaces used across the project
└──utils             # Reusable or helper functions
```
### Environmental variables

| Name                   | Purpose                                 | Required |
| ---------------------- | --------------------------------------- | -------- |
| `NEXT_PUBLIC_SITE_URL` | For all client-frontend requests        | Yes      |
| `NEXT_PUBLIC_API_URL`  | For all frontend-backend requests       | Yes      |

> For environmental variables, use only safe places, such as a "Deploy secret API keys manager". Don`t save or share them in repository.

### Fast start
```
# 1. Clone the repository.
git clone git@github.com:stanislave-droid/TravelTrucks.git
cd TravelTrucks

# 2. Install all dependencies.
npm install

# 3. Configure environmental variables (.env)
You can check example in .env.example.
Make sure to write all necessary value; otherwise project won`t work.
Requirements are above.

# 4. Run in dev mode
npm run dev

# 5. Run build mode
npm start
```

### Developers
- [Drochak Stanislav - FullStack developer](https://www.linkedin.com/in/stanislav-drochak/)

<h1>Show case:</h1>

## Main features:
- ### Catalog of trucks.
  <img width="1469" height="891" alt="image" src="https://github.com/user-attachments/assets/92ec70d0-5a88-443a-8621-f1a952af275a" />
- ### Detailed information about truck including reviews and booking form.
  <img width="685" height="659" alt="image" src="https://github.com/user-attachments/assets/890795da-0bce-4fde-8bda-88fe98065d0a" />
- ### Loaders and Not Found posters across website.
  <img width="1262" height="823" alt="image" src="https://github.com/user-attachments/assets/af801aca-a7d9-4056-aa1c-31afbfe0cf5e" />
  <img width="889" height="833" alt="image" src="https://github.com/user-attachments/assets/0d14dba9-487c-410f-8536-a2bd153a1993" />
## Other parts of website:
- ### Header with dynamic navigation.
  <img width="1316" height="66" alt="image" src="https://github.com/user-attachments/assets/6b74c60c-b512-4fbb-9484-d6266259dab5" />
- ### Starting page.
  <img width="1437" height="758" alt="image" src="https://github.com/user-attachments/assets/058e5fd7-dc38-4641-8f8b-94a725feaf4e" />





