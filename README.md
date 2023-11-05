# StudySync-Hackout
## Problem Statement:
As students we have experienced and we believe nowadays most of the students face the problem of **Time-Management** as well as **Focus**.
One of the biggest websites offering free courses for improving skills is Youtube, but it's also very distracting.Unlike paid platforms which are focused on improving and tracking the level of your skill youtube just provides you with the resources. To make a better use of youtube and enhance the user experience we have therefore developed a solution for this issue as a group.
## Plausible Solution:
**StudySync** lives up to its name by enabling you to monitor your study timetable.
It's a web application designed to make a student's life better by organizing and managing it.
It gives you a platform to make use of the free resources on YouTube and track your progress more effectively.
Additionally, because there are no outside distractions from other websites, studying becomes more focused.
## Key Features
- Ability to make a list of every YouTube playlist that a student wants to watch or finish studying later on.
- A pie chart is also used to show the playlist's overall progress a person has made toward reaching his objective.
- Because they feel embarrassed about it, students typically find it difficult to ask specific questions at times.We have also included generative AI for doubt-solving while watching the video in order to address this issue.
## How it works?
Let us begin from the entry point of our website:
1. We are taken to the sigin page when we launch our webapp, which is where the Oauth feature is located.
2. Following authentication, the user is taken to a dashboard where he may view all his registered courses as well as the progress made.
3. On our explore page, a user can select the course that interests them and add it to the registered courses list.
   
**We use YouTube data api calls to obtain the playlist's data.The information is saved in our Mongoose-powered database when the user adds a course to their list.**

4. After then, the user's registered courses are visible on the courses page.
5. Upon selecting the courses, users are taken to a page with a video player where they can view the video and have their progress tracked.
6. We have also integrated generative AI on the video player page where students can ask their questions and get appropriate answers.

**For this purpose we have used ChatGPT-3.5.**
## Declaration
The whole project's code was written from scratch during the rigorous, adrenaline-filled hackathon hours, in an amazing demonstration of creativity and teamwork. In the intense pressure of the competition, our committed team rose to the occasion, using their creativity and coding skills to realize this project and push the limits of what is possible to accomplish in a short amount of time.
## Future Prospects
Our website application has a plethora of intriguing prospects for the future. 
- Our main objective is to improve the user experience by providing a smooth, user-friendly interface that accommodates different preferences and learning styles.
- Users will be able to construct playlists that are personalized for their own requirements integrating different fields of sudy.
- Moreover, the program will enable users to track their progress within playlists, promoting customized learning paths and personal improvement.
  
**As we continue to evolve, our commitment remains steadfast in delivering an enriched digital ecosystem that adapts to users' unique demands, transforming learning and content consumption.**


[Github repo](https://github.com/sourabhjo7/StudySync-Hackout)
