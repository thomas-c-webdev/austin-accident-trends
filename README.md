# Austin-Accident-Trends
This project records the car accidents within the city of Austin, Texas. Then it uses data visualization to display the trends of car accidents based on what times of day they occurs and on what roads.
## Motivation
Accordig to the U.S Census Burea, the city of Austin, Texas had the fastest growing metro area in the country overall from 2010 to 2020. There's annually about 33,700 new people from domestic migration, 6,660 people from foreign migration, and roughly 15,980 from regular growth. That's a lot of people, and that means a lot of people on the roads. 

With so many new people, a lot of pressure is put on U.S highways that weren't neccesarily built for the influx. Likewise, the GPS company TomTom recorded in a 2021 study that Austin had the 3rd worst traffic in Texas and the 21st worst in the country.

As a resident here myself, I often have to deal with the traffic, witness the road rage, and hear the stories. 

Other companies like TomTom, law firms, and others do these sorts of calcluations, but it is almost always after the fact, usually a year later as most studies are done. I want to acccess, store, and display this information in a digestible format as it is happening, because real time updates would allow for modern GPSs to optimize routes based on safety in real time with a great amount of accuracy using historical events. 

Now, GPSs do use real time updates, but if a road has had double digit accidents in the current month, the GPS will not tell you to not go on that road.

As these devices currently stand, most can only be optimized for cost, distance, environmental concerns, and traffic congestion. What these concerns don't directly consider is the statistical chance of having a car accident based on recent historical events that happened within a certain time frame that week, month, or year in regards to that road or landmark.

Yet, one could argue that if everyone used a GPS that optimized itself for historical safety and could avoid roads, that car accidents would just happen in other areas that'd now be newly crowded. 

Not true, since the GPS could still monitor congestion, as modern GPSs do, and redirect some traffic onto the high risk roads, making them less congested and arguably safer. It could aid in balancing traffic in this manner, while prioritizing safety around historical road events. This idea can be thought of as the dictum: no one should be unknowlingly directed a high collision road site by their GPS. 

This project is an simply attempt to access, record, and visualize the data of Austin traffic incidents in real time. 

## Build Status 
In progress.

## Tech Used
Html, CSS, Javascript
Node, SQL
MapQuest Framework
*Javascript Visualization

## Features

### Que
There's a que of the most recent traffic indidents that have happened with the road they happened on and the time they started. These are where new ones appear. It show the 3 most recent and the others fade away after successfully being stored in the data base.

### Time and Day Correaltion
The number of incidents across the days of the week is shown. What days have the least number of incidents is indicated and what times are the most and least dangerous are also displayed.

### Location Ranks
The top 20 street locations that have the most incidents is shown, as well as an other category with the remaining streets and their incidents combined. These features are updated constantly in real time.

## How to Use
Ideally, the data here would be considered when advising routes in a gps, depending on what the user has optimized for. Statistical likelihood of safety should be something a person could choose. As it is, it could be used as a reference of where to drive and what days and times would be best to plan errands, or go places in general.


