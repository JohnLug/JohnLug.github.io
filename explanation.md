Map dynamic rendering:
A map is created to accomodate all of the available cities and their respective colors. Using a function, it dynamically creates a box in the map that labels its specific color, city name and its coordinates. Additionally, it adds a listening event of a click for player movement.

Player movement:
ChatGPT was utilized in this section. Initially, Cities was to be placed specifically to only be accessible to certain cities but now was made as a grid like map to allow movement of any players occupying a city to adjacent cities with a consumption of an action point, so there a valid checker to see if a city coordinates is adjacent to a city by plus or minus 1 in the x axis or y axis. This also accomodates player collision where it doesn't allow the players coordinates to be in the same coordinates as the other player.

Infection management:
At the end of each player round, the infection deck is drawn to add infection to cities, which gives the specific city drawn to gain a level of infection. If a chosen city with a level 3 infection would spread the infection to its adjacent cities instead because of the maximum level 3 infection so a function is implemented to check the level of the city and to find the adjacent cities of that level 3 infected city. The player has the ability to remove these infection levels with the usage of one action point.
