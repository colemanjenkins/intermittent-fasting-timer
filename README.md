# intermittent-fasting-timer

<!-----
NEW: Your output is on the clipboard!

NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 0.842 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β24
* Mon May 18 2020 09:49:59 GMT-0700 (PDT)
* Source doc: Intermittant Fasting Timer
* Tables are currently converted to HTML tables.

WARNING:
You have 11 H1 headings. You may want to use the "H1 -> H2" option to demote all headings by one level.

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 1; ALERTS: 0.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p>
<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>


Cover page


# Team Introduction

**Coleman Jenkins **As someone who has always loved music and engaged problem solving, Coleman loves to spend time at the intersection of music and technology. He enjoys using music software and doing live sound production which inspires him and pushes him to improve. 

In order to pursue these desires further in the future, Coleman is planning to major in Electrical and Computer Engineering. He is also a member of UVA Solar Car which builds a street-legal car powered completely by solar panels. This helps him see how software and hardware interact and enables him to create systems that work to accomplish a goal. In his free time, Coleman drums with Chi Alpha Christian Fellowship and plays and other musical instruments to relax and refocus.

**Alan Li **Having lived in over ten states and outside of the US, Alan has nothing holding him back from pursuing new opportunities in new and unknown subjects. Living among so many diverse backgrounds has inspired him to optimize society’s tools for succeeding through his passion for software engineering and economics. By meshing these two fields together he hopes to develop new ideas to improve the efficiency at which problems can be solved. Within the environment of the company, he hopes to create a relationship that promotes growth on both sides. Alan is an anticipated Computer Science Major at UVA and hopes to develop a deeper understanding of its relationship with non-technological fields to better serve the diverse needs of today’s society. 

**Annie Cao **Annie has been fascinated with human health and biology, particularly in a medical context, since she was a child. When she discovered an equivalent passion for statistical data and computer science in her first year at college, she delved into the intersection between these fields. Annie is majoring in Computer Science and taking courses in statistics and biology as well. Annie also has a knack for managerial and administrative duties. During her internship at the medical technology company ResMed last summer, Annie drafted technical documentation, investigated new software for the department, and co-piloted an early testers program for other project managers. Ultimately, she is looking forward to honing and applying her interdisciplinary skills and knowledge this summer during Launch. Outside of classes, she volunteers at the Emily Couric Clinical Cancer Center and enjoys drawing in her free time.

Table of Contents



---



[TOC]



# 


# Introduction



---


Intermittent fasting is a health technique individuals may use to manage how they’re consuming food, leading to both mental and physical benefits. During intermittent fasting, individuals set aside an amount of time each day where they cannot eat. The purpose of the Intermittent Fasting Timer is to allow individuals to easily keep track of their fasts, both current and in the past. 

To keep track of a current fast, users may select an option from the menu of common fasts (i.e., 16:8, 18:6) built into the application, or users may develop a custom fast. The time for the fasting period is then entered into a circular timer, and the time will count down towards 0:00:00. Adjacent to the circular timer is an icon showing the type of fast (e.g., 16:8 vs. custom 5:5) and two buttons allowing the user to start and stop the timer. If the user stops the timer before the timer has reached 0:00:00, the user has failed the fast; if the timer successfully reaches 0:00:00, the user has succeeded in the fast.

To keep track of past fasts, users may refer to their history, where a list of each fast they have previously done through the application can be found. Each item in the list shows the type of fast, the length of the fasting period, the date of the fast (only the start date is visible at first; the user may click an icon for more details, such as more precise information about the time of the fast)), and the result of the fast (pass vs. fail). Users may also refer to their Records section, where they can find the length of their longest and shortest fasting periods and the percentage of fasts that they have passed. Also adjacent to a timer is an icon showing the number of hours since the last fast the user has completed (regardless of whether the fast was successful or not).


# 


# Key definitions



---



<table>
  <tr>
   <td>Client
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>User
   </td>
   <td>The person using the web app for fasting
   </td>
  </tr>
  <tr>
   <td>Web Application
   </td>
   <td>Timer web application
   </td>
  </tr>
  <tr>
   <td>Developer
   </td>
   <td>Launch-SWE-1
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>





# Project requirements



---


The user should be able to select the length of time they would like to fast. For example, if they are doing a 16:8 fast, the fast length they would choose would be 16 hours. This can be of a specific (typical) length, like 16 hours or 18 hours, but may also be customized to any length (specifically to the seconds level). 

The fasting timer will show a clock with the amount of time left in the fast: it will display hours, minutes, and seconds remaining. The user will be able to start the timer manually. 

Once the timer has been stopped, the user will be able to see past fasts in a “History” section and the timer will be reset and able to be started again. 


# 


# Technologies to be implemented


# 

---


The project will require the use of the following technologies:

React.js - React is a Javascript library created by Facebook that efficiently builds user interfaces

Git and Github - Github is a software development platform that allows for source control as developers share and work on code.


# 


# Project timeline


<table>
  <tr>
   <td><strong>Task</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Hours</strong>
   </td>
  </tr>
  <tr>
   <td>Timer
   </td>
   <td>User can track the time until their fast ends using this display. 
   </td>
   <td>10
   </td>
  </tr>
  <tr>
   <td>Time Selection Buttons
   </td>
   <td>User can choose their preferred time setting for fasting which will set the timer.
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>Display of Time
   </td>
   <td>The display will show the amount of time since last fast to the nearest hour.
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>History Log
   </td>
   <td>Shows users past fasts and whether or the user succeeded or failed the specific fast. It will also show users a more detailed start and end time with a drop-down bullet.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>Records
   </td>
   <td>Users can see lengths of the longest and shortest fasts in addition to a percentage of fasts they have passed.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>Incentivizing messages
   </td>
   <td>
   </td>
   <td>1
   </td>
  </tr>
</table>
