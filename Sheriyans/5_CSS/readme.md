style.css

setup : 
repeatation steps 
1. create a html file
2. create a css file
3. link the css file to the html file
4. write their boiler plate code

_____________________________________________________

Topics to learn: 

width and height

____

color and background-color
color = text color
background-color = background color

___

## 5.3_ mastering units

units - px % vw vh em rem
pixels, percentage , view width, height, em rem 

pixels- 1px = can think like 1 px on screen
size of a pixel varies depending on the screen quality 
retina display - ultra display - each pixel can show a diff color
dpi, ppi - depth per inch, pixel per inch 

dont use pixels while coding to avoid scroller 


    replace px with vw


-- 
percentage 
percent of total screen 
- is responsive 

- percentage hamesha parent se value leta h
- will fill only wrt to the parent within the parent 


--
vw and vh
- vw and vh screen se value lete h 
parent se bhi zyada fill krskte h - to avoid this use overflow: hidden on the parent 

--
em - fixed size like px

em depend karta hai us element ke font size per, 
aur ye agar parent ko dete hai to children par bhi apply hote hai 

consider an element box with 16px font size, then 1em value will be 16px , 
agr uss font size change hua tho em ki value bhi  change hoga 


--
rem- root emphirial unit fixed but wrt the root element--- 
- root element - html tag
relative to html tag 


____

max-width and max-height



________________________________________________

## 5.4 font family 
sans serif same width no sharp edge 
serif - tailed edges 

-- 
google fonts
- filter - decoratiev stroke 
- download --> install 
--
font-weight: takes a number;
text-transform: make first word of each word capital
text-decoration - underline 



font-family 
--
font-size
pixels are unresponsive 
for responsive font size -- keep vw

line-height: 1;
height between lines. can use for styling a paragraph

text-align: left / right / justify / center / start
both side aligns
start is same as left 

---
padding
space within an element 
child is always at the edge corner. 
to get the child inside--> 
give padding to the parent 


margin
between two element 
eg: margin-bottom: 20px

-> values dena ka tareeka : 
single value: all sides 
two values: top/bottom, right/left ------clock wise 
four values: top, right bottom, left --> clockwise 

--

border
boder boder-style boder-color = boder 
eg: boder: 3px solid black;

styles: solid, dashed, double


--> border radius 
makes the edges of the box round
border-radius: 50% ; makes the element circular 
border sirf circle hone tk kat skte h. can only have the radius till circular

pixels se values dena start kro. 

capsule ke liye: width ka half kro
--

# 5.5 Display property 
display
position
background
flex

pseudo elements
pseudo classes

___________________-------------____________________
animation
media queries

