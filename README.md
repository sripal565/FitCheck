## FITCHECK

## Inspiration
As we navigate the complex social and educational commitments we have as students, worrying about clothes adds another layer of stress to our lives. Planning out what to wear in advance can get inconvenient, and it gets difficult to keep track of what clothes you have available, taking precious time away from things like sleeping and eating breakfast in the morning. As such, a simple button that would not only help us save time but allow us to feel confident in ourselves during the whole process seemed like something that could seamlessly integrate into not only our lives but the lives of countless others. Whether it be other students, adults, or even kids trying to find their styles, we believe that FitCheck can assist anyone in meeting their fashion needs. 

## What it does
Fitcheck functions as an online wardrobe and outfit generator. It allows users to upload images of their clothes and keeps track of them in a virtual closet. Once the virtual closet has accumulated enough pieces, it can start creating outfits by sorting them into categories and grouping pieces that go well together. The user simply has to click the generate fit button on the main page, and FitCheck presents them with the best outfit they can make with the clothes available to the user. 

## How we built it
We built this website using Next.js for the frontend and Flask for the backend. The frontend components consist of the different pages on the website, including the home page where the user can generate a fit based on their closet, the closet page where the user can upload their clothing, and the laundry page where the user can see which clothes they have worn recently. The backend takes the images uploaded through the website, crops them using an AI library, and adds them to a clothing database. The backend can also generate a possible "fit" by choosing a shirt, pant, and shoe combination. 

## Challenges we ran into
Although we faced numerous challenges through the entire 36-hour process of creating, running, compiling, and debugging code, there were some notable challenges. Firstly, we needed a way to determine the color of a certain article of clothing without the background colors interfering. This is where we integrated rembg, an AI & Neural Network driven library, to open the input file paths of the images and paste them to an output file folder where their backgrounds were removed. We also had an issue with uploading the images, like the shirts, pants, and shoes, by category. For example, at one point, our website behaved so that if a shirt was already uploaded it populated the "Shirt" section of the UI, and the user uploaded a jpg of their pants, the pants would populate the "Shirt" section on the website UI rather than populating its own "Pant" section. Even if we got it working, the shirt jpg would disappear from the UI. We fixed this by requiring an upload of all 3 files at once, and then sorting these files to populate their respective cells on the UI.

## Accomplishments that we're proud of
We are proud to have been able to create a fully functioning website without much prior experience with fullstack development.  Also, we were able to use tools that we had not used before, such as the Rembg AI library, to crop and save the new images. In addition, with minimal experience with Next.js and Flask, we could still create the frontend and backend after hours of learning, testing, and debugging. The many tools and skills we learned throughout this hackathon allowed us to create this website, and we are all incredibly proud of it. 

## What we learned
Throughout this project, we have all learned frontend and backend frameworks, mainly Next.js and Flask. In addition, we also learned how to integrate the frontend and backend together to create a seamless website capable of taking image uploads and generating combinations of clothes based on the uploaded images database. 

## What's next for FitCheck
The next version of FitCheck would incorporate a machine learning model, which is trained on different types of "good" and "bad" fits to generate much better fit recommendations. In addition, we plan on incorporating a fit-rater system that can rate people's fits on a scale of 1-10.  
