var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1IjoiMWplc3VzbWVkaW5hIiwiYSI6ImNseGVzemp2OTBrMDYybXB1eThia3Y4NTAifQ.26mZ3cKTvO-V6-cyLgFG3Q',
    showMarkers: true,
    markerColor: '#00bd00',
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, 
    auto: false,
    title: 'The Historic Dominican Landmarks of Washington Heights',
    //subtitle: 'Welcome to a virtual tour of Washington Heights, a neighborhood steeped in history and cultural richness. Lets explore some of its historic landmarks and learn about its fascinating past.',
    byline: '',
    
    chapters: [
        {
            id: 'dsi',
            alignment: 'center',
            hidden: false,
            title: 'CUNY Domininican Studies Institute',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPvKpzHEaX0lStwS-wL1P0HH5I3aj__8aLBxfXdSju7EO-jN2KQCFy7b6wql9HvAXioU&usqp=CAU',
            description: 'Founded in 1992 at The City College of New York, the Dominican Studies Institute of the City University of New York (CUNY DSI) is the first university-based research institute in the U.S. dedicated to the study of people of Dominican descent worldwide. Led by sociologist Ramona Hernández, Ph.D., it produces and shares research on Dominicans and the Dominican Republic. CUNY DSI houses the Dominican Archives—the sole collection of its kind outside the Dominican Republic—and the largest Dominican Studies Library in the U.S. It hosts public lectures, conferences, and exhibitions, including New York City’s first dedicated exhibit space for Dominican culture.',
            location: {
                center: [-73.93962, 40.84124],
                zoom: 14.05,
                pitch: 45.00,
                bearing: 29.60    
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        //!!! zoom out still image to showcase whole neighborhood no marker, articles section, link to federal department of parks and cuny dsi website, credit section, value of buildings map 
        {
            id: 'WashHeights',
            alignment: 'left',
            hidden: false,
            title: 'Washington Heights Overview',
            description: 'Washington Heights has become a cultural hub for the Dominican community in New York City, especially since the 1960s when Dominican immigrants began settling in large numbers. The neighborhood has been transformed by the rich traditions, businesses, and cultural practices brought by these immigrants. Dominican residents have significantly influenced the local culture, cuisine, and music scene, making it a vibrant enclave of Dominican life. Over the decades, Washington Heights has become a symbol of the Dominican diasporas resilience and contributions to the citys multicultural tapestry.',
            location: {
                center: [-73.93962, 40.84124],
                zoom: 14.05,
                pitch: 45.00,
                bearing: 29.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       
        {
            id: '1-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Libreria Caliope, 170 Dyckman st.',
            image: 'https://www.atlantico.net/asset/thumbnail,1280,720,center,center/media/atlantico/images/2010/06/03/2014021510583689147.jpg' ,
            description: 'Founded in 1994 at 170 Dyckman Street, Libreria Caliope was the first Dominican-owned bookstore in New York City, specializing in Dominican books and periodicals. Libreria Caliope also served as a cultural hub, regularly hosting multiple activities including poetry and book readings as well as talks about the arts. ',
            location: {
                center: [-73.92651, 40.86392],
                        zoom: 16.00,
                        pitch: 56.50,
                        bearing: 0.00           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Salome Urena de Henriquez Campus, 4600 Broadway',
            image: 'https://imagescdn.homes.com/i2/UJSNCdAmAbWnt5cmyaEPNM9awJTJGM_Q5gqp8zA3jzE/117/city-college-academy-of-the-arts-new-york-ny-primaryphoto.jpg?p=1',
            description: 'Salóme Ureña Henríquez Campus, founded in 1992, is a school complex located at 4600 Broadway, near W 196th Street, that houses three public middle schools. The schools include I.S. 218 Salome Ureña de Henríquez, M.S. 293 City College Academy of the Arts (which serves grades 6 to 12), and M.S. 322. The campus and I.S. 218 were named in honor of Dominican national poet Salomé Ureña de Henríquez (1850-1897), the most prominent female literary writer in the 19th century in the Dominican Republic. She was a fervent champion of women’s education, who created, alongside renowned Puerto Rican humanist Eugenio María de Hostos, the first public institution to formally train teachers in the Dominican Republic, the Instituto de Señoritas. Now a university, the Instituto today carries her name and graduates more teachers than any other institution in the Dominican Republic.',
            location: {
                center: [-73.93012, 40.86106],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00       
              
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: '3-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Rancho Jubilee, 1 Nagle Avenue',
            image: 'https://i.imgur.com/noSGViL.png',
            description: 'Though no longer in existence, Rancho Jubilee, founded by Carlos Tavarez and Rolando Lantigua in 1996, at 1 Nagle Avenue, was another local favorite for people looking to enjoy seafood cooked in a Dominican style.',
            location: {
                center: [-73.93076, 40.85916],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4-identifier',
            alignment: 'right',
            hidden: false,
            title: 'P.S 178, 12-18 Ellwood st.',
            image: 'https://i.imgur.com/jTKKIpk.png',
            description: 'P.S. 178 Professor Juan Bosch Public School, established in 2000, is an intermediate school named after Juan Bosch (1909-2001), the 43rd President of the Dominican Republic. He was its first democratically elected president in the 20th century and to this day is fondly remembered as an honest politician. Bosch, a first-rate intellectual and profound thinker, whose contributions include Composición Social Dominicana (1970) and De Cristóbal Colón a Fidel Castro (1972), books in the social sciences that have profoundly impacted the intellectual development of the Dominican Republic, Latin America, and the Caribbean. Bosch’s literary writing skillfully combines social themes with his unique artistic vision (Gilgen, 1978). “La mujer” (1932), perhaps Bosch’s most recognized literary piece, is a testament to the previous statement.',
            location: {
                center: [-73.92819, 40.85926],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: '5-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Virgilio Hernandez, 30 Fairview Avenue',
            image: 'https://i.imgur.com/6ZGrWpi.png',
            description: 'Virgilio Hernandez arrived in the U.S. from the Dominican Republic on August 29, 1923. A merchant in his home country, he had $100 (about $1,523 in today’s currency) with him at the time of his arrival. Mr. Hernandez came to visit his friend, Alfredo Pogson, who lived at 30 Fairview Avenue, near 191st Street. In his Manifest, Mr. Hernandez declared that he intended to stay at that address for several months. 30 Fairview Avenue falls within the boundaries of the proposed Dominican Historic District. It also represents a link between the first enclave of Dominicans, located between 150th and 165th Streets, and the second enclave of Dominicans, that resided on 180th Street and above.',
            location: {
                center: [-73.92944, 40.85730],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Riverside Car and Limo Service, 1642 St Nicholas Avenue',
            image: 'https://i.imgur.com/dwdsKGU.png',
            description: 'Riverside Car and Limo Service, established in 1991 at 1642 St Nicholas Avenue, and R.C. Audubon Car Service, founded in 1997 at 2224 Amsterdam Avenue, have served the Washington Heights community for over two decades. R.C. Audubon Car Service proudly boasts its Dominican heritage through its logo, featuring the Dominican coat of arms.',
            location: {
                center: [-73.92839, 40.85631],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7-identifier',
            alignment: 'left',
            hidden: false,
            title: 'George Washington Educational Complex, 549 Audubon Avenue',
            image: 'https://i.imgur.com/h0DUkTD.jpg',
            description: 'George Washington High School, an important fixture in Washington Heights, has played an integral role in the educational development of the communitys young Dominican population. It has educated generations of Dominican youth including Major League Baseball World Series Champion, Manny Ramirez and Musician, Nelson Cordero.',
            location: {
                center: [-73.92626, 40.85563],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8-identifier',
            alignment: 'right',
            hidden: false,
            title: 'El Nuevo Caridad, 1618 Nicholas Avenue',
            image: 'https://i.imgur.com/Bu8idWB.jpg',
            description: 'El Nuevo Caridad, founded in 1995, located at 1618 Nicholas Avenue, offers a good example. Since its opening in Washington Heights, other Dominican Caridad restaurants have opened in other places, including in the Bronx and Yonkers.',
            location: {
                center: [-73.92918, 40.85555],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Dominican Women Development Center, 519 W 189 st.',
            image: 'https://i.imgur.com/Z2wl8qx.png',
            description: 'Established in 1988, the Dominican Women’s Development Center (DWDC) is located at 519 W. 189th Street. DWDC is a community based non-profit organization “dedicated to the empowerment of all women and communities to advance gender equity and social justice”. The idea for the organization emerged from an organized meeting led at Broadway Temple set up by 30 Dominican women, under the leadership of Rosita Romero and Mireya Cruz, among others, who wanted to address issues they had experienced since migrating to the U.S., such as gender and racial prejudice, lack of economic opportunities, and invisibility to many of the concerns affecting them women. Today, DWDC is the largest community-based organization devoted to women’s issues in Washington Heights. They employ an array of experts that provide a range of services such as domestic violence counseling and public healthcare enrollment support. The organization also runs two community spaces, the Mamá Tingo Childcare & Learning Center, a daycare named after a Dominican activist who fought valiantly for the rights and livelihoods of rural farmworkers in the Dominican Republic, and La Sala, a community space for LGBTQ+ youth. The founding executive director of the organization, Rosita Romero, has become a champion for women’s issues, particularly for Dominican women, known both nationally and internationally for the work of DWDC. Under her leadership, DWDC’s operations have expanded to other boroughs, states, and territories including Puerto Rico. The Center’s headquarters and major operations, however, continue to be based in Washington Heights. People of the caliber of the Honorable Julissa Reynoso, recently appointed Chief of Staff to First Lady Jill Biden, and well-known Singer Amara La Negra, have publicly praised and supported the Dominican Women Development Center.',
            location: {
                center: [-73.92805, 40.85304],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Professor Juan Bosch way, 190 st. and Amsterdam Avenue',
            image: 'https://i.imgur.com/iTTNH6V.jpeg',
            description: 'Professor Juan Bosch Way is located at the Northeast corner of 190th Street and Amsterdam Avenue in Washington Heights. It was established on June 25, 2010.',
            location: {
                center: [-73.92662, 40.85331],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Merlin German Way, 189th st. and St Nicholas Avenue',
            image: 'https://www.nydailynews.com/wp-content/uploads/migration/2011/05/01/VJER5NYQ2X6K4O5AA2AXQ2MTSI.jpg?w=535',
            description: 'On April 30, 2011, elected officials, community leaders, and residents honored the life of Merlin German with a co-named street. Born in New York City to Dominican parents on November 15, 1985, German enlisted in the U.S. military and joined the 5th Battalion, 11th Marines, 1st Marine Division, where he would deploy to Iraq in 2004. During his career, he faced a blast from an Improvised Explosive Device that burned 97% of his body. Despite incredibly slim odds, German managed to live, earning him the nickname the “Miracle Man.” After this, German turned to helping child burn victims through his charity organization, Merlin’s Miracles. He died because of surgery complications on April 11, 2008. The corner of 189th Street and St. Nicholas Avenue was co-named “Merlin German Way”.',
            location: {
                center: [-73.93035, 40.85428],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12-identifier',
            alignment: 'right',
            hidden: false,
            title: 'St Elizabeth Church, 268 Wadsworth Avenue',
            image: 'https://i.imgur.com/lDVwEaz.jpg',
            description: 'Many Dominicans in Washington Heights and Inwood identify as Catholics. The Catholic Church has traditionally helped people unite and preserve their spiritual beliefs and cultural legacy. Three Catholic churches located in Washington Heights, St. Elizabeth, founded in 1869 and located at 268 Wadsworth Ave.; Saint Rose of Lima Church, founded on December 10, 1905 at 510 W 165th St. 10032; and Church of the Incarnation, founded in 1908 at 1290 St Nicholas Ave, are regularly packed with a visibly Dominican majority of worshippers during religious services. It is common practice for these churches to celebrate important Dominican Catholic holidays such as January 21, the day of Our Lady of La Altagracia.',
            location: {
                center: [-73.93263, 40.85341],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Corporal Juan M. Alcantara Way, 180th st. and St Nicholas Avenue',
            image: 'https://i.imgur.com/pjf1gFo.jpeg',
            description: 'Corporal Juan M. Alcantara Way is located at the corner of West 180th Street and St. Nicholas Avenue, near where Alcantara once lived. Officially signed on February 16, 2009, the street honors the life and contributions of Juan Alcantara. Alcantara, a Dominican immigrant, was a U.S. soldier who died in the Iraq War on August 6, 2007. Alcantara was assigned to the 1st Battalion, 23rd Infantry Regiment, 3rd Brigade of the 2nd Infantry Division. He joined the war as a Green Card holder and was given U.S. citizenship posthumously. Also, the post office located at 90 Vermilyea Avenue has carried Alcantara’s name since August 8, 2015.',
            location: {
                center: [-73.93076, 40.85916],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Flor Maria Miolan Way, 184 st. and Audubon Avenue',
            image: 'https://i.imgur.com/UjB2Nss.jpeg',
            description: 'On February 19, 2019, the Dominican community remembered the life and legacy of Dominican immigrant Flor Maria Miolan (1928-2015) by naming a street in her honor. Known locally as “Mami Flor,” Miolan was a champion of children, who made her home on 184th Street a haven for those with special needs. Inspired by her own daughter, who had Down Syndrome, Miolan would take these children in and feed, bathe, and homeschool them. In addition to her six biological children, she raised over 100 kids. This path was a matter of fate for Miolan, who arrived in New York City in 1962 to escape a threat on her life by cronies of Dominican dictator Rafael L. Trujillo. In recognition of her profound selflessness and nurturing spirit, the corner of her apartment-turned-school house, 184th Street and Audubon in Washington Heights, is now known as "Flor Maria Miolan Way."',
            location: {
                center: [-73.93111, 40.85042],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15-identifier',
            alignment: 'left',
            hidden: false,
            title: 'P.S. 132 Juan Pablo Duarte, 185 Wadsworth Ave',
            image: 'https://i.imgur.com/QXiSqjX.png',
            description: 'On January 26, 1984, P.S. 132, one of the oldest schools in Washington Heights, was renamed P.S. 132 Juan Pablo Duarte. This action resulted from a local initiative spearheaded by community activist Rafael Agustín Estévez, who during the late 1970s was President of the school’s Parents Association. Juan Pablo Duarte was one of the founding fathers of the Dominican Republic, as mentioned above. Today, over 95 percent of students at Juan Pablo Duarte school are of Hispanic descent and the majority trace their ancestry to the Dominican Republic.',
            location: {
                center: [-73.93405, 40.85063],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '16-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Flight 587 Way, 181 st. and Amsterdam Avenue',
            image: 'https://i.imgur.com/lrzHGud.jpg',
            description: 'On October 29, 2017, the corner of 181st Street and Amsterdam Avenue in Washington Heights was named Flight 587 Way in honor of the 256 people who lost their lives in the deadly crash at Belle Harbor. This was the second deadliest air disaster in U.S. history.',
            location: {
                center: [-73.93094, 40.84857],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Quisqueya Playground, 180 st. and Amsterdam Avenue',
            image: 'https://i.imgur.com/X46H8bd.jpg',
            description: 'Quisqueya Playground, named as such in 1998, is located at West 180th Street and Amsterdam Avenue. The playground was named in honor and recognition of the Dominican population in Washington Heights. The term Quisqueya was the original name of La Española, the island that makes up the Dominican Republic and the Republic of Haiti today. The name Quisqueya has become synonymous with describing Dominicans and their homeland.',
            location: {
                center: [-73.93091, 40.84800],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Staff Sergeant Riayan Augusto Tejeda Street, 180 st. and St Nicholas Avenue',
            image: 'https://i.imgur.com/bKFZXa7.png',
            description: 'Staff Sergeant Riayan Agusto Tejeda Street is located at the southern corner of 180th Street and St. Nicholas Avenue in Washington Heights, close to where Sgt Tejeda once lived. On February 27, 2004, City Councilman Miguel Martinez, alongside other elected officials, community leaders, and residents of Washington Heights unveiled the street sign, to honor the life and legacy of Marine Staff Sergeant Riayan A. Tejeda, the first person of Dominican descent to die in the Iraq War, with a named street. Sergeant. Tejeda was killed during a conflict in Baghdad on April 11, 2003 and was a member of the 3rd Battalion, 5th Marine Regiment. Posthumously, Tejeda, who fought in the war as a green card holder, was given U.S. citizenship.',
            location: {
                center: [-73.93465, 40.84862],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Mama Tingo Child Care and Learning Center, 2346 Amsterdam Avenue',
            image: 'https://i.imgur.com/KQnDRvg.jpg',
            description: 'This daycare, established by the Dominican Womens Development Center, is named after Mama Tingo, a Dominican activist who fought valiantly for the rights and livelihood of rural farmworkers in the Dominican Republic.',
            location: {
                center: [-73.93076, 40.85916],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Hector “Bomberito” Zarzuela, 500 W 176 st.',
            image: 'https://i.imgur.com/9aUsfNz.png',
            description: 'Dominican trumpeter Hector “Bomberito” Zarzuela (1937-2021), a longtime resident of Washington Heights and member of the American Federation of Musicians (AFM, the musicians’ union), made a major mark with the world-renown salsa super-group, the Fania All-Stars, which was founded by the Dominican musician Johnny Pacheco (with Jerry Masucci), in New York City. Born in Moca, the Dominican Republic, Zarzuela played at the State-sponsored radio station, Radio-Television Santo Domingo before coming to the U.S. 1965. In New York City, he played on some of the most important salsa and merengue recordings of the 1970s and 1980s. Zarzuela developed an extraordinary technique on the trumpet and was known for his beautiful tone and his sight-reading skills. In addition to playing with the Fania All-Stars, with whom he received a Gold Record for his participation in the 1972 film Our Latin Thing. He played with other salsa mega-stars such as Dominicans Johnny Pacheco, José Alberto El Canario, and Puerto Rican Perico Ortiz. In 1973, Zarzuela joined Primitivo Santos’s New York-based merengue band, with whom he recorded four albums. Zarzuela lived in Washington Heights, at 500 West 176th Street, Apt. 69.',
            location: {
                center: [-73.93366, 40.84490],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '21-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sgt Jose Enrique Ulloa Way, 176 st. and Amsterdam Avenue',
            image: 'https://nycitylens.com/wp-content/uploads/2014/03/IMG_5519.jpg',
            description: 'Since September 18, 2021, the Intersection of West 167th Street and Amsterdam Avenue in Washington Heights has carried the name of illustrious performer and community cultural activist, Normandia Maldonado. Born in Santiago, Dominican Republic on February 21, 1929, Maldonado arrived in the United States in 1960. Within merely a couple of years, she distinguished herself as a world-class performer, earning the opportunity to perform at the Lincoln Center as part of the Mambo Girls, an all-young-women group she formed with her sister Marina. Though her gift at singing and dancing took her around the world, she ultimately put down roots in Washington Heights, where she earned a reputation as someone with an immense passion for the arts and an incomparable commitment to her roots and community. Maldonado worked tirelessly to promote Dominican culture and among her many significant achievements are: 1) the establishment of Centro Cultural Ballet Quisqueya, an organization dedicated to celebrating Dominican culture and folkloric music at an international level and 2) the creation of a statue in New York City depicting founding father of the Dominican Republic, Juan Pablo Duarte. Maldonado’s long history of cultural activism in her community helped establish the Dominican people as a distinct ethnic group within the New York City mosaic.',
            location: {
                center: [-73.93747, 40.83910],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '22-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Church of the Incarnation, 1290 St Nicholas Avenue',
            image: 'https://i.imgur.com/qw866a8.jpeg',
            description: 'Many Dominicans in Washington Heights and Inwood identify as Catholics. The Catholic Church has traditionally helped people unite and preserve their spiritual beliefs and cultural legacy. Three Catholic churches located in Washington Heights, St. Elizabeth, founded in 1869 and located at 268 Wadsworth Ave.; Saint Rose of Lima Church, founded on December 10, 1905 at 510 W 165th St. 10032; and Church of the Incarnation, founded in 1908 at 1290 St Nicholas Ave, are regularly packed with a visibly Dominican majority of worshippers during religious services. It is common practice for these churches to celebrate important Dominican Catholic holidays such as January 21, the day of Our Lady of La Altagracia. In recognition of the religious fervor of the Dominican people, these churches began to provide Spanish-language mass and Sunday school. It became the norm for these institutions to bring in Spanish-speaking priests.',
            location: {
                center: [-73.93673, 40.84522],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '23-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Johnny Ventura Way, 176 st. and Wadsworth Avenue',
            image: 'https://robertocavada.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-04-at-3.56.07-PM-1-1024x682.jpeg',
            description: 'In 2022, in celebration of the life and legacy of Dominican Merengue legend Johnny Ventura elected officials, community leaders, and residents named a way in his honor. Ventura, alongside his band “The Combo Show,” rose to international fame in the 1960’s, when they distinguished themselves from other acts by blending the Dominican Republic’s national music with elements of rock ‘n’ roll. This syncretism both modernized and revolutionized the genre, making Ventura a household name far beyond the borders of the Dominican Republic. Across the Americas, he became known as “the Elvis of Merengue.” Among his vast list of accolades, is his induction into the International Latin Music Hall of Fame and the receipt of 6 Latin Grammy Awards. In honor of his incredible legacy in the history of Dominican music and Latin American music more broadly, the corner of 176th and Wadsworth Avenue has been named Johnny Ventura Way.',
            location: {
                center: [-73.93656, 40.84726],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '24-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Freddy Beras Goico Way, 175 st. and Broadway',
            image: 'https://i.imgur.com/xBsF27x.jpg',
            description: 'Since December 9, 2016, the corner of 175th Street and Broadway, near the iconic United Palace theatre, has been known as Freddy Beras-Goico Way. To this day, Beras-Goico (1940-2010) is considered the most multi-faceted artist in the history of the Dominican Republic. With over 50 years in television, he enjoyed an extremely successful career, leading several television programs that aired at prime times. Beras-Goico is most well-known for his capacity to create humor, leading to the creation of numerous memorable characters that became part of Dominican popular culture. Among his striking personalities were “the priest,” “the weatherman,” “the old deaf woman,” “the professor,” and “the Republic.” Beras-Goico’s style of television and humor became a school of its own within the Dominican Republic and Latin America.',
            location: {
                center: [-73.93805, 40.84641],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '25-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Rafael Corporan De Los Santos Way, 176 st. and Broadway',
            image: 'https://i.imgur.com/O1fE6K1.png',
            description: 'On February 19, 2019, the Dominican community recognized the life and legacy of Rafael Corporán de los Santos (1937-2012) by naming the corner of 176th Street and Broadway in Washington Heights "Rafael Corporán de los Santos Way." Corporán was the host of the widely popular variety show, "Sábado de Corporán," which ran from 1988 to 2012, when he passed. As its name suggests, the program aired every weekend in the highly coveted Saturday timeslot. Sábado de Corporán became a staple in Dominican society beloved not only for its entertainment value, but also for its humanitarian edge. In fact, Corporán was known for creating a communication style that seamlessly blended entertainment and philanthropy.',
            location: {
                center: [-73.93793, 40.84702],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '26-identifier',
            alignment: 'right',
            hidden: false,
            title: 'United Palace, 4140 Broadway',
            image: 'https://i.imgur.com/C3tlwB8.jpg',
            description: 'Founded in 1930 at 4140 Broadway, The United Palace is a famous theater that functions as both a religious and performing arts center. Since about 1998, when Dominican managers and staff at the venue began hosting events specifically for the growing Dominican community, the venue has been extremely popular amongst Dominicans. Today, in fact, it is an essential stop for any artist hoping to cater to or win the favor of Dominicans in New York City. In 2016, for instance, world-renowned bachata boy-band Aventura, chose the United Palace for their four-date reunion residency. The bands decision to perform at the United Palace instead of better-known venues like Madison Square Garden, is a testament to the integral role that Dominicans and in particular, the Dominican community in Washington Heights, has played in their success.',
            location: {
                center: [-73.93805, 40.84641],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '27-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Juan Bosch Foundation, 550 W 172 st.',
            image: 'https://raed.academy/wp-content/uploads/2018/11/Juan-Emilio-Bosch-Gavi%C3%B1o-dstNtc.jpg',
            description: 'The Juan Bosch Foundation, founded in 2006, is located at 550 West 172nd Street. The Juan Bosch Foundation is a not-for-profit organization dedicated to the dissemination of theoretical ideas and knowledge about Dominican culture, especially among children of Dominican ancestry. The foundation also cultivates, promotes and preserves the work of Juan Bosch. Juan Bosch (1909-2001), an intellectual of the highest caliber, was the first president to be democratically elected in the Dominican Republic during the 20th century. He is generally considered one of the most distinguished thinkers in Latin America.',
            location: {
                center: [-73.93691, 40.84294],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '28-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Hugo Cabrera Way, 173 st. and Amsterdam Avenue',
            image: 'https://pbs.twimg.com/media/FaOVYodXkAACzWj.jpg:large',
            description: 'In 2022, elected officials, community leaders, and residents memorialized the life and legacy of Dominican basketball star Hugo “El Inmenso” Cabrera with a way named in his honor. A native of the Dominican Republic, Cabrera fell in love with basketball after being invited to play the game when passing through New York City’s Central Park in 1968. Cabrera quickly developed great talent for the sport, and after moving back to the Dominican Republic, amassed the eyes of the entire Dominican sports world. Cabrera’s success drew attention even outside the country, from within the United States, where he would become the first Dominican to sign a contract with the NBA. He is widely considered among the greatest basketball players from the Dominican Republic and more broadly, Latin America. In honor of his immense legacy, the corner of 173rd street and Amsterdam Avenue has been named Hugo Cabrera Way.',
            location: {
                center: [-73.93507, 40.84291],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '29-identifier',
            alignment: 'left',
            hidden: false,
            title: 'EMT Luis de Pena Square, 172 st. and Amsterdam Avenue',
            image: 'https://images.foxtv.com/static.fox5ny.com/www.fox5ny.com/content/uploads/2019/09/1280/720/EMTSQ_1448168418766_520695_ver1.0.jpg?ve=1&tl=1',
            description: 'On November 21, 2015, New York State Senator Adriano Espaillat, City Council member Ydanis Rodríguez, other elected officials, community leaders, and residents honored the bravery and humanity of Luis de Peña Jr. A long-time emergency medical technician stationed at EMS 13 in Washington Heights, de Peña Jr. was a beloved fixture in Upper Manhattan characterized by his cheerful spirit and dependable nature. Affectionately known as “Fluffy,” he was famous for hosting workplace barbeques for the entire neighborhood and faithfully attending the memorial services of his fallen co-workers. In the aftermath of the harrowing 9/11 attacks, de Peña Jr. devoted countless hours to the rescue and recovery effort at the World Trade Center. This time, unfortunately, his characteristic selflessness would come at the ultimate cost. As a result of his work at Ground Zero, where he inhaled toxic dust, he contracted a life-threatening illness that prematurely brought his life to an end in 2013. In recognition of his dedication to the Washington Heights community and New York City at large, the intersection of Amsterdam Avenue and West 172nd Street is now known as “EMT Luis de Peña Jr. Square.”',
            location: {
                center: [-73.93535, 40.84259],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '30-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Wilson Bastista Corner, 171 st. and Audubon Avenue',
            image: 'https://i.imgur.com/J1HIIBd.jpg',
            description: 'Wilson Batista Corner is located at the corner of 171 St. and Audubon Avenue. Wilson Batista was a world-class Dominican pianist and performer raised in Washington Heights. For his piano-playing, he won top prize at the Luis Ferre International Concerto Competition. Batista also performed at venues of the caliber of New Yorks Carnegie Hall, Puerto Ricos Centro de Bellas Artes, el Gran Teatro del Cibao in the Dominican Republic, and The Clore Music Center in Israel. He was a member of the Association of Dominican Classical Artists, an organization founded in the 1980s to foster appreciation for the art and folkloric music of the Dominican Republic and to create space for composers and musicians of Dominican descent in the U.S. While studying at the Manhattan School of Music, Batista passed away prematurely of a brain aneurism, at just 29 years of age. Wilson Batista Corner was established on December 5, 2006. On July 28, 2006, ten days after Batista’s death, Congressman Charles Rangel took the floor in the U.S. House of Representatives to honor Batista’s life and offer his condolences to Batista’s family and the Dominican people.',
            location: {
                center: [-73.93716, 40.84181],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '31-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Altagracia Dilone Levat Way, 166 st. and St Nicholas Avenue',
            image: 'https://i.imgur.com/ZxeUok9.jpeg',
            description: 'Altagracia Dilone Levat Way, is located at the corner of 166th Street and St. Nicholas Avenue, near Alianza Dominicana, one of the institutions she served during her tenure in the Dominican community. The streetway sign honoring her contributions was unveiled on June 20, 2015. Born in the Dominican Republic on December 19, 1957, Dilone Levat came to New York City at the age of 6. She grew up in Rye, NY and attended Barnard College, where she majored in political science and graduated with honors. “At New York Citys High School of Music and Art, she graduated at the top of her class and played viola in the All-City Orchestra”. Prior to returning to the Dominican community, Ms. Dilone Levat worked as an Assistant Dean at Pace University and Associate Dean at New York Law School. She also held executive positions at Legal Momentum, an organization focusing on women, and Womens Project Theater. Ms. Dilone Levat returned to the community, first, as a consultant at the CUNY Dominican Studies Institute. She then joined the board of the Association of Dominican Classical Artists (ADCA), an organization for which she volunteered and helped tremendously to market and bring visibility to their concerts and musical activities. She also became the director of one of Alianza Dominicana’s cultural outreach programs in Washington Heights/Inwood. In her capacity of a board member of the ADCA and director of Alianza Dominicana’s cultural outreach program, Dilone Levat helped these Dominican organizations connect and establish partnerships with cultural institutions in New York City working in the arts, particularly with children. Without knowing it, Dilone Levat, came to the Dominican community during her final years of life and was embraced by the Dominican people, who enthusiastically received her as a volunteer and felt gratitude for the work she was doing. No one noticed her long commute back and forth from Rye to Washington Heights as she was present and active in the cultural life of the Dominican community day',
            location: {
                center: [-73.93960, 40.83924],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '32-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Alianza Dominicana, 530 W 166 st.',
            image: 'https://i.imgur.com/2G2nxyn.jpg',
            description: 'Alianza Dominicana, today located at 530 W 166th St, was founded in 1984. Alianza Dominicana emerged from a desire on the part of local Dominicans to expand the social services provided to residents of Washington Heights. With the passing of time and the dedication of its leadership, Alianza grew enormously, becoming the second largest community-based organization in New York City. It also became the largest employer in Washington Heights after the hospital, the public school, and Yeshiva University, hiring close to 400 people and in the summer, up to 2,000 local youth. Today, it has expanded to become a major cultural center. In 2001, while in route to the Dominican Republic, American Airlines Flight 587 crashed into Belle Harbor. All of the 260 passengers, 90 percent of whom were of Dominican descent, died, alongside 5 others on the ground. This was the second deadliest crash in U.S. history. Alianza Dominicana became a major force in helping afflicted families cope with their loss while helping them secure legal representation before the airline and the U.S. government, as well as in the decision to erect a monument on behalf of the victims. An acclaimed local Dominican artist, Freddy Rodriguez, won the contract from the city to create the memorial that today stands beautifully at Belle Harbor.',
            location: {
                center: [-73.93960, 40.83924],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '33-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cultural Center Ballet Quisqueya, 2153 Amsterdam Avenue',
            image: 'https://lh4.googleusercontent.com/proxy/ceiQMCFlqrscSbUMVnFcAzmuIliUnS78yd9vKaEMGnZ3xWWdne_I7hyQZvpSlC-ftS8waxqpUv4lSbmedpxzz1Ex6ViI0ldx7c_IizxFuWpaEQAm8VKiWrFFumAWKGQzZt_JkjvLmE9FoHnOt1xX_G1LqbLRiHviowbOoDp044iEvsJxMtlitWIZ5_JVh3ypU6B3b5VqT_SEc1cqdyDYD9w',
            description: 'Centro Cultural Ballet Quisqueya was founded in 1967 at 2153 Amsterdam Avenue by the esteemed Dominican artist and cultural activist, Normandia Maldonado. The organization was created specifically to promote and preserve Dominican folkloric music and dance. Children who studied dance at Ballet Quisqueya were part of a troupe that regularly performed in the community. In 1982, Ballet Quisqueya’s troupe participated in the first Dominican Day Parade, held in Washington Heights. Ballet Quisqueya remains active today and continues to perform at the event annually. It is one of the oldest Dominican cultural institutions in New York City. By 1978 as many as 36 voluntary associations existed in Washington Heights. Dominican organizations served as gathering places for recreational and cultural reaffirmation, showed interest in political involvement (particularly in the electoral process), influencing integration into society.',
            location: {
                center: [-73.93732, 40.83880],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '34-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Normandia Maldonado, 2153 Amsterdam Avenue',
            image: 'https://i.imgur.com/D7QJ1Z1.png',
            description: 'Normandía Maldonado was a dancer, cultural activist, and folklorist who migrated to the United States in 1960. Two years after arriving, she founded the dance trio, the Mambo Girls, alongside her sister Marina Maldonado. The Mambo Girls performed at Lincoln Center and on both local and national television. In addition to her career in the arts, Maldonado became a distinguished community leader, and along with Juan Paulino and Victor Liriano, among others, launched a campaign to erect a landmark to Dominican founding father Juan Pablo Duarte in New York City. She also founded the Centro Cultural Ballet Quisqueya, a performing arts community organization dedicated to the promotion and preservation of Dominican culture. Maldonado lived in Washington Heights, at 2153 Amsterdam Avenue, Apt. 11 until her passing on February 8, 2018.',
            location: {
                center: [-73.93732, 40.83880],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '35-identifier',
            alignment: 'left',
            hidden: false,
            title: 'P.S. 008 Luis Belliard, 465 W 167 st.',
            image: 'https://i.imgur.com/UPvloLo.png',
            description: 'Founded in 1995 at 465 West 167 Street, P.S. 8 Luis Belliard is a public elementary school named after beloved community activist and architect Luis Belliard. Belliard died prematurely of a massive heart attack just as the Dominican community was immersing itself in an intense process of institutional building in New York City. With the renaming of P.S. 8, the late Luis Belliard became the first Dominican immigrant to be acknowledged and memorialized for his contributions to the Dominican community in the United States.',
            location: {
                center: [-73.93668, 40.83915],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '36-identifier',
            alignment: 'right',
            hidden: false,
            title: 'J & R Grocery, 2134 Amsterdam Avenue',
            image: 'https://i.imgur.com/fj70yC6.png',
            description: 'Since the mid-1960s, bodega and Dominican were synonymous. The allusion was based on the fact that by 1980, 90% of all bodegas in NYC were owned by Dominicans. More than a business, these establishments had long been the cornerstone of the Dominican community in New York City, where new arrivals and long-time residents alike can find jobs, acquire goods on credit, and spend time in the community. The Dominican bodega is such a unique space where one can find anything from the classic Dominican Presidente beer, the typical refresco rojo soda, and the green plantain to brand name medications used in the Dominican Republic for headaches or upset stomachs. Examples of bodegas established in Washington Heights are: J&R Grocery, founded in the 1970s, at 2134 Amsterdam Avenue, Guerrero Grocery and Meat Market, founded in 1986 at 4125 Broadway and 174th Street; and the more recent Jarabacoa Deli Food Corp, founded in 2012 at 421 Audubon Avenue, just to name a few.',
            location: {
                center: [-73.93813, 40.83856],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '37-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Gregorio Luperon High School for Math and Science, 501 W 165 st.',
            image: 'https://i.imgur.com/PLjrTEg.png',
            description: 'In 2022, in recognition of Gregorio Luperón High School’s immense contributions to the local community elected officials, community leaders, and residents honored the institution with a way named in its honor. Since its founding in 1992, Gregorio Luperón High School has served as a haven for newly arrived Spanish speaking immigrants, especially those from the Dominican Republic. Originally a transition program, in 2001 it was transformed into a 4-year school. It derives its name from General Gregorio Luperón (1839-1897), a Dominican military and state leader who victoriously led the Restoration War of 1865, which reestablished the Dominican Republic as an independent nation state.',
            location: {
                center: [-73.93861, 40.83833],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '38-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Saint Rose of Lima Church, 268 Wadsworth Ave',
            image: 'https://i.imgur.com/xZGPW8X.png',
            description: 'Many Dominicans in Washington Heights and Inwood identify as Catholics. The Catholic Church has traditionally helped people unite and preserve their spiritual beliefs and cultural legacy. Three Catholic churches located in Washington Heights, St. Elizabeth, founded in 1869 and located at 268 Wadsworth Ave.; Saint Rose of Lima Church, founded on December 10, 1905 at 510 W 165th St. 10032; and Church of the Incarnation, founded in 1908 at 1290 St Nicholas Ave, are regularly packed with a visibly Dominican majority of worshippers during religious services. It is common practice for these churches to celebrate important Dominican Catholic holidays such as January 21, the day of Our Lady of La Altagracia.',
            location: {
                center: [-73.93263, 40.85341],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '39-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Centro Altagracia de Fe y Justicia, 511 W 164 st.',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/PM3IpR1Eb_UjnTD1EhQfHQ/348s.jpg',
            description: 'Centro Altagracia de Fe y Justicia was founded in the mid-2000s at 511 West 164th Street. Created by the New York Province of the Society of Jesus, Centro Altagracia de Fe y Justicia is a Catholic community organization dedicated to “putting faith into action, promoting social justice, through dynamic collaborations and needs-based initiatives, in service to the communities” of Washington Heights, Inwood, and the Bronx. Centro Altagracia offers assistance, education, and advocacy support for a number of issues including faith formation, domestic violence, and housing. It is named in honor of Our Lady of Altagracia, the patron saint of the Dominican Republic. La Virgen de Altagracia is the only virgin in the Hispanic world whose image always appears with her son and husband, representing a family.',
            location: {
                center: [-73.93943, 40.83765],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '40-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Jesus "Bobby El Duro" M. Quesada, 535 W 163 st.',
            image: 'https://i.imgur.com/nY49Kta.png',
            description: 'Jesús “Bobby El Duro” M. Quesada (1932-2013) was a Dominican trumpeter and composer that arrived in New York City in 1955. He worked extensively with the legendary Latino music label, Fania Records, whose co-founder and featured artist, Dominican Johnny Pacheco, was a close personal friend. Quesada played with the famed Fania All-Stars, a supergroup of salsa artists with roots in the Dominican Republic, Puerto Rico, and Cuba. In addition to playing mostly salsa with Fania, Quesada produced his own merengues. For instance, his album "Homenaje a Quisqueya: Merengues Con Clase," a tribute to the legendary Dominican percussionist Ángel “Catarey” Andújar. In 1970, Quesada lived at 535 West 163rd Street Apt. 34 in Washington Heights.',
            location: {
                center: [-73.94044, 40.83732],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '41-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Club Deportivo Dominicano, 2088 Amsterdam Avenue',
            image: 'https://impactolatino.com/wp-content/uploads/2024/03/CCDD-2.jpg',
            description: 'Centro Cultural Deportivo Dominicano, known locally as Club Deportivo Dominicano, was founded on March 23, 1966. Located at 2088 Amsterdam Avenue, it was a social club that offered recreational activities to Dominicans in New York City. As one of the oldest Dominican institutions in the United States, it was originally a members-only organization for domino aficionados. Over time, Club Deportivo opened its doors to the public and became equally known as a reliable site to dance bachata and merengue, and partake in other cultural activities. As the Dominican population grew in the neighborhood, Club Deportivo Dominicano started offering English classes and access to immigration lawyers, activities for which the club acquired the nickname “La Embajada Dominicana.” Club Cultural Deportivo remains active in Washington Heights with a current membership of over 300 people.',
            location: {
                center: [-73.93944, 40.83689],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '42-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Malagon Sisters, 600 W 164 st.',
            image: 'https://i.imgur.com/GDraeFn.png',
            description: 'In the 1940s, Dominican artists such as Rafael Petitón Guzmán and the Malagon Sisters left a lasting impression on New York. The Malagon Sisters were a successful Dominican all-female trio that rose to U.S. stardom in the 1950s. Made up of sisters Carmen Amelia, Haydeé, and Gladys Elisa Malagón (a fourth sister, Virginia, became part of the trio years later), the Malagon Sisters was one of the first Dominican music acts to successfully cross over, and contributed to the exposure of merengue, cha-cha-chá, and other Latin American genres to a wide spectrum of U.S audiences. The trio’s vocal and wide variety of instrumental talents earned them opportunities to perform at prestigious venues such as the Apollo Theater, and iconic platforms such as on the Ed Sullivan Show. Both Carmen and Gladys Malagón were members of the American Federation of Musicians (AFM). Carmen and Gladys Malagón lived in Washington Heights at 600 West 164th St, Apt. 47.',
            location: {
                center: [-73.94216, 40.83851],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '43-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Federico Lample Jr., 565 W 162 st.',
            image: 'https://i.imgur.com/rNJnDDP.png',
            description: 'On June 4, 1917, Federico Lample journeyed to the U.S. from the Dominican Republic to join his wife Elizabeth Lample at their New York residence at 565 W 162nd Street. In his 1917 Manifest, Mr. Lample, a successful merchant and member of the well-to-do classes in the Dominican Republic, declared his intention to become a citizen of the U.S. and remain permanently in the country with his family. The Lamples’ decision to settle in the U.S. appears to have been in the works for some time, as reflected by the fact that Mr. Lample traveled frequently between the Dominican Republic and the U.S., kept residency in both countries, and later, in 1921, their son, Federico Lample Jr. came to join them at their Washington Heights apartment. In his Manifest, Mr. Lample Jr. declared the following: that he was carrying $750 (the equivalent of approximately $1,896 in today’s currency) with him, that he came to further his education, and that he planned to stay in the U.S. indefinitely. Indeed, by 1947, Mr. Lample Jr. had become a bona fide U.S. citizen.',
            location: {
                center: [-73.94215, 40.83711],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '44-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Olga & Morris Piaewonsky, 565 West 162nd st.',
            image: 'https://i.imgur.com/rNJnDDP.png',
            description: 'Olga Piaewonsky arrived in the U.S. in 1919 at the age of ten. She was accompanied by her mother, Ana, and younger brother, Morris. The Piaewonsky family came to visit relatives at 565 West 162nd St, which happened to be the same building where the Lample family resided. For all we know, this address was a stopping point for well-to-do Dominicans, many of whom declared in their Manifest their intention to visit friends in that location. In fact, the patriarch of the family, Zorach, moved to the Dominican Republic from Lithuania in the late 19th century to help with his brother’s recently established business. We found that the Piaewonsky family later rented their own apartment in the building. Within ten years of their arrival, on November 10, 1928, the elder Piaewonsky, Ana, filed a petition to become a naturalized citizen of the United States. By the mid-1930s, Olga would be married to Harris Gould, a teacher who taught at a Hebrew school in New York City. Morris lived with them while attending New York University. He then attended St. Louis University and became a successful businessman. Morris would later return to the Dominican Republic to work for his father, before managing the distribution of Universal Films in Santo Domingo city (The St. Croix source, 2013). The Piaewonsky family represents one of several streams of Jewish people who settled in the Dominican Republic since the 19th century. In addition to those who settled in the Dominican Republic to flee religious persecution, there were Jews, like the Piaewonsky family, whose relocation was motivated by a desire to expand their existing businesses.',
            location: {
                center: [-73.94215, 40.83711],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '45-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Romulo A. Brea, 838 Riverside Drive',
            image: 'https://i.imgur.com/iS3SAN3.png',
            description: 'Roumulo A. Brea arrived in the U.S. on April 23, 1915. Nine years later, on December 23rd, 1924, Mr. Brea became a naturalized U.S. citizen. At the time, he lived with his wife, Julia Brea on 838 Riverside Drive, located between 159 & 160 Streets. It is worth nothing that Mr. Brea was drafted into the U.S. Army for both World War I and World War II, a rare occurrence.',
            location: {
                center: [-73.94576, 40.83611],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '46-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Casa Dominicana, 3825 Broadway',
            image: 'https://www.diariolibre.com/images/tnfocus/0/0/895/573/imagenes/2015/11/1141011.jpg',
            description: 'A gathering space founded in the 1950s by activists who sought to overthrow Trujillo’s government. Located at 3825 Broadway, Casa Dominicana, whose board of directors included prominent figures such as Tuilo H. Arvelo, Carmen Enna Moore Garrido, and José Espaillat, was very active and held activities to keep their members in the cause, as well as to bring awareness to others who were not Dominican. Casa Dominicana regularly organized fundraising events to support the Anti-Trujillista movement and other Anti-Trujillistas who were exiled in other countries such as Cuba and Mexico. People of the caliber of Félix A. Mejía and Dr. Jesús de Galíndez, delivered speeches at Casa Dominicana. Dr. Galíndez, a professor at Columbia University who had written a thesis denouncing the government of Trujillo, disappeared one day after class. He is presumed to have been kidnapped and murdered by the dictator. Galíndez’s disappearance is regarded as one of the most horrendous events in the shared history of the Dominican Republic and the United States. Below is a copy of a newspaper clipping published almost seven decades ago, depicting a gathering at Casa Dominicana in commemoration of the 1863 Restoration of the Dominican Republic. At the center of the image is one of Casa Dominicana’s founding members, Tulio Arvelo, delivering a speech. To his left are Ramón Asencio and José Espaillat, and to his right are Ana Cruz and Enrique Castillo. Behind Arvelo is a picture of Juan Pablo Duarte, one of the founding fathers of the Dominican Republic (La Prensa, August 1954).',
            location: {
                center: [-73.94419, 40.83573],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '47-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Enrique Henriquez, 600 W 158th st.',       
            description: 'Enrique Henriquez, a well-to-do lawyer, and his daughter Belen Henriquez lived in Washington Heights at 600 W 158th Street. They arrived in the U.S. on April 8, 1913. Records indicate that six years later, in March 1919, the Henriquez family still resided there.',
            location: {
                center: [-73.94011, 40.83287],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '48-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Enrique Pichardo, 521 West 158th st.',
            image: 'https://i.imgur.com/xDIsckN.png',
            description: 'Enrique Pichardo, a merchant from Barahona, a town in the South of the Dominican Republic, came to the United States on October 11, 1920 to visit his friend Luico Loina. Mr. Loina’s apartment was located in what could be construed as a closely tied Dominican milieu within Washington Heights constituted by families who resided in buildings that were in close proximity, including enclaves in the following streets: 150, 156, 158, 159, 162, and 165. Another Dominican enclave is found at 180, 181st, and 187. Mr. Loina lived at 521 West 158th St.',
            location: {
                center: [-73.94468, 40.83299],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '49-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Hungria Carmelo Garcia, 570 W 156 st.',
            image: 'https://i.imgur.com/cXLlmSM.png',
            description: 'Percussionist Hungría Carmelo García (1935-2014) performed and recorded with some of the biggest names in the music industry. Carmelo García arrived in New York City in 1965 and became a member of the American Federation of Musicians. He played the congas and timbales and was active from the mid-1960s to the late 1980s, playing with Latin music greats such as Willie Colon, Ruben Blades, Machito, and Mongo Santamaria as well as with jazz legends, including Chick Corea, Sonny Rollins, Joe Henderson, Freddie Hubbard, George Shearing, and Hubert Laws. Notably, Carmelo García also worked with rock and pop superstars Santana, the Grateful Dead, and Stevie Wonder, playing percussion on Wonder’s acclaimed song, “Another Star” from the classic album entitled Songs in the Key of Life. Carmelo García lived at 570 W. 156th St., Apt #55 in 1965 and 1969.',
            location: {
                center: [-73.94468, 40.83299],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '50-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Ilka Tanya Payan Park, Broadway and Edward M. Morgan Place',
            image: 'https://i.imgur.com/MbXnU4x.png',
            description: 'Since 2002, the Ilka Tanya Payán Park has stood at Broadway and Edward M. Morgan Place near 157th Street. Payan, who moved to New York City from the Dominican Republic at 13, was a Hollywood actress, immigration lawyer, and one of the first female HIV activists. She advocated for HIV awareness at the height of its stigmatization, helping women of all kinds in both the U.S. and the Dominican Republic. She passed away of AIDS-related complications on April 6th, 1996 at 53.',
            location: {
                center: [-73.94544, 40.83459],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '51-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Alberto Beltran, 790 Riverside Drive',
            image: 'https://i.imgur.com/svbmMyt.png',
            description: 'Alberto Beltrán (1923-1997), also known as “El Negrito de Batey” was a world-class Dominican singer that moved to Washington Heights in 1969. No stranger to New York City, Beltrán had visited earlier in the decade to perform alongside compatriots “King of Merengue” Joseito Mateo and Primitivo Santos, for a legendary concert at Madison Square Garden. This was the first concert at the famed venue to feature Dominican music. Beltrán, who is best known for his work with the Cuban group, La Sonora Matancera, had a very diverse musical repertoire, which included boleros, guarachas, and merengues, most of which were written by Dominican composers. A member of the American Federation of Musicians, Beltrán lived in Washington Heights from 1967 until 1973, at 790 Riverside Drive.',
            location: {
                center: [-73.94693, 40.83468],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '52-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Luis El Terror Dias Way, 165 st. and Amsterdam Avenue',
            image: 'https://i.imgur.com/xGZl2Zh.png',
            description: 'Since December 8, 2018, the northwest corner of 165th Street and Amsterdam Avenue has been known as Luis "El Terror" Días Way. Días (1952-2009), a talented musician and composer, is recognized as the “father of Dominican rock”: “In the 70s and 80s, Días created a sound that was unprecedented in the Dominican Republic. He fused disparate instruments and styles, pioneering polyrhythms by, for example, playing an electric guitar on a merengue track. A student of Dominican folklore, Días blended traditional genres like bachata, salves, and more with reggae, jazz and beyond in his repertoire”. In the early 1980s, Días taught traditional Dominican music at the American Museum of Natural History and in the late 1990s, served as the Vice-Director of Casa de la Cultura Dominicana, an organization created under the administrative supervision of the Office of Secretary of State of the Dominican Republic, located at 541 W 145th Street in Washington Heights.',
            location: {
                center: [-73.93820, 40.83760],
                zoom: 18.14,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '53-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Mary Meunier, 657 West 165th st.',
            description: 'Mary Meunier came through Ellis Island in 1923. She was a dress maker. Ms. Meunier lived at 657 West 165th Street.',
            location: {
                center: [-73.94279, 40.84005],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '54-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Community Association of Progressive Dominicans, 3940 Broadway',
            image: 'https://i.imgur.com/x7SXbZj.png',
            description: 'In 1979, the Community Association of Progressive Dominicans was founded at 3940 Broadway. One of the first Washington Heights organizations formed with the goal of helping Dominicans struggling with social issues such as poverty and lack of affordable housing. The emergence of this organization marked a turning point for Dominicans living in the area. It reflects their decision to settle permanently in the U.S. and seek solutions to the problems that afflicted them in the spaces where they lived. Guillermo Linares was the association’s founding executive director. He would later rise to become the first person of Dominican ancestry elected to a political post in New York City (Hernandez, 2012; 331). Mr. Linares is currently the President of New York State’s Higher Education Services Corporation, the highest position occupied by a person of Dominican descent in Governor Andrew M. Cuomo’s administration. Mr. Linares’ daughter, Mayra Linares-Garcia, who was born and raised in Washington Heights, serves as a Trustee at the City University of New York.',
            location: {
                center: [-73.94065, 40.83923],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '55-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Audubon Ballroom/San Juan Theater, 3940 Broadway',
            image: 'https://i.imgur.com/0vsveTV.jpeg',
            description: 'The Audubon Theatre and Ballroom officially opened at 3940 Broadway on November 28, 1912. After World War II the Audubon Theatre and Ballroom was renamed Beverly Hills Theater for a short time. In 1949, it was renamed the San Juan Theater, in honor of the Puerto Rican community. In the 1950s, the San Juan Theater became a popular dancehall among the Dominican community, so much so that on June 28, 1956, Dominican artists of the caliber of Rafael Petitón Guzmán, known as “the ambassador of Dominican Merengue,” and Ricardo Rico y su Conjunto Típico Dominicano performed at the venue for an event celebrating Our Lady of Altagracia, the Patron Saint of the Dominican Republic. Petitón Guzmán’s performance marked a turning point for Dominican musicians to follow suit and perform there as well. The Ballroom was thrust into the international limelight when Malcolm X was tragically assassinated there on February 1, 1965. Malcolm X and Dr. Betty Shabazz Memorial & Education Center was installed there on May 19, 2005.',
            location: {
                center: [-73.94065, 40.83923],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '56-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Carlos Alberto Martinez Way, W 165th st. and Audubon Avenue',
            image: 'https://djn2oq6v2lacp.cloudfront.net/wp-content/uploads/2020/11/Don-Carlos-A-Martnez-641-.jpg',
            description: 'The southeast corner of W 165th Street and Audubon Avenue became known as Carlos Alberto Martínez Way on November 1, 2020. Martínez, affectionately known as Don Carlos, was a staunch advocate for individuals with substance use disorders in New York City, who fought to change perceptions and systems that catalogued people with substance use disorders as people who had lost their minds. After hospital discharge, Don Carlos would find appropriate homes for many of such patients and help them join Alcoholics Anonymous, where they had access to a support system as they started their journey towards sobriety.',
            location: {
                center: [-73.93076, 40.85916],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '57-identifier',
            alignment: 'left',
            hidden: false,
            title: 'I.S. 90 Mirabal Sisters Middle School, 21 Jumel Pl',
            image: 'https://i.imgur.com/Uh74N31.png',
            description: 'Founded in 1994 at Jumel Place, Intermediate School (I.S.) 90 Mirabal Sisters Campus is a school complex that housed three public middle schools. They were named as follows: M.S. 319 María Teresa, M.S. 321 Minerva, and M.S. 324 Patria, in honor of Dominican revolutionaries and martyrs María Teresa, Minerva, and Patria Mirabal. The three sisters were murdered in 1960 by the Trujillo regime for their ideas and political activism against his dictatorship. Considered one of the most heinous crimes in recent history, the assassination of the three sisters impacted the world. On February 7, 2000, the United Nations officially designated the day of the Mirabal sisters’ death, November 25, the International Day for the Elimination of Violence Against Women.',
            location: {
                center: [-73.93554, 40.83933],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       
        {
            id: '58-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Romulo A. Brea, 838 Riverside Drive',
            image: 'https://i.imgur.com/iS3SAN3.png',
            description: 'Romulo A. Brea arrived in the U.S. on April 23, 1915. Nine years later, on December 23rd, 1924, Mr. Brea became a naturalized U.S. citizen. At the time, he lived with his wife, Julia Brea on 838 Riverside Drive, located between 159 & 160 Streets. It is worth nothing that Mr. Brea was drafted into the U.S. Army for both World War I and World War II, a rare occurrence.',
            location: {
                center: [-73.94576, 40.83611],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: '59-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Regina Silverio, 540 W 165th st.',
            image: 'https://i.imgur.com/gAi15oP.png',
            description: 'Regina Silverio, who lived at 540 W 165th Street, arrived in the United States on August 30, 1924 from the Dominican Republic. She declared in her Manifest that she would stay for several months and intended to visit Mario Morera. A year prior, on April 2, 1923, Maria Larkeque Menier, who was a dressmaker, moved a few buildings up the block, to 657 W',
            location: {
                center: [-73.94020, 40.83853],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '63-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Manalo Tavarez Justo Way, 181st st. and St. Nicholas Avenue',
            image: 'https://i.imgur.com/hJaQ37O.png',
            description: 'The southeastern corner of 181st Street and St. Nicholas Avenue in Washington Heights was named Manolo Tavarez Justo Way on June 16, 2012. A young college revolutionary, Tavarez, along with others, founded 14 de Junio, an underground resistance movement that opposed the oppressive regime of Rafael Leónidas Trujillo. Tavarez ultimately paid for this struggle with his own life.',
            location: {
                center: [-73.93419, 40.84925],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '60-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ramón Emilio García, 2440 Amsterdam Ave.',
            image: 'https://i.imgur.com/a6NXzF8.png',
            description: 'Saxophonist Ramón Emilio García (1907-1989), born in Santiago de los Caballeros to a family of musicians, migrated to New York City in April 1930. He performed alongside notable composer and bandleader Rafael Petitón Guzmán, at the 1939 New York World’s Fair. This was likely the first time merengue, the national music of the Dominican Republic, was played in the U.S. García is perhaps best known for his involvement with Angel Viloria y su Conjunto Típico Cibaeño in the early 1950’s, a merengue band that enjoyed great success not only in the U.S., but also in Puerto Rico, Cuba, and Haiti. After Viloria’s death in 1954, García started his own group, Conjunto Típico Cibao, remaining active in New York City until the early 1980s. A member of the American Federation of Musicians (AFM), Ramón García lived at 2440 Amsterdam Ave., Apt. 5F in 1965, from 1969 to 1973, and again in 1978.',
            location: {
                center: [-73.93094, 40.84857],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '61-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Embajada',
            description: 'La Embajada, or the embassy, was a tailor shop that a group of former constitutionalist soldiers from the Dominican Republic adopted as a recreational community space. Having left the Dominican Republic at the behest of their former opponents— and as a result not necessarily of their own volition— the soldiers longed for a sense of community in their new country. La Embajada was created to fill this desire and need.',
            location: {
                center: [-73.94503, 40.83440],
                zoom: 16.00,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    
        {
            id: 'goodbye',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'https://www.ccny.cuny.edu/sites/default/files/inline-images/CUNY-Dominican-Studies-Institute-RGB.png',
            description: '',
            location: {
                center: [-73.93795, 40.84754],
        zoom: 14.30,
        pitch: 56.50,
        bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
