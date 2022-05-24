export default[
    {
        id: 0,
        description: "This report details how primary features like curbweight, engine type, carbody type, fuel system, etc. affect the secondary features like horsepower, mileage and price.",


        list: ["High curbweight usually results in less mileage. High horsepower seems to add weight to the car but this trend breaks at around a curbweight of 3000kg.", 
        
        "Highway and City mileage show a decreasing trend with increasing engine size whereas horsepower more or less shows and increasing trend. Slicing the data shows that convertibles and hardtops show a dip in horsepower after engine size of 200 without any significant positive impact on mileage or price. Wagon with engine size 130 is providing the best horsepower and mileage combination.", 
        
        "3 cylinder cars give exceptional mileage at lower prices but very less horsepower.12 cylinder sedans show a trend of high average horsepower for a slight drop in city mileage in comparison to 8 cylinder cars at a similar average price.", 
        
        "Hatchbacks are the best for high mileage at in the lower price segment but don't offer good horsepower.", 
        
        "Overhead Camshaft (ohc) provides the best mileage at a cheaper price and thus is a very popular choice (more than 72% cars use ohc engine type). dohcv is the go to engine type when it comes to horsepower. it also shows the greatest difference between city and highway mileage which means it is way more efficient at higher speeds.", 
        
        "Hatchbacks and sedans show a completely opposite trend with peak rpm. for sedans fwd drivewheel produces the peak rpm but for hatchbacks it produces the lowest peak rpm and instead rwd records highest peak rpm.", 
        
        "cars using mpfi tend to be more expensive than others, offering higher horsepower.4bbl is not looking like a good option because of poor average mileage and below average horsepower at a rather high price. For example spfi costs similar to 4bbl and delivers way better mileage and similar hp."],
        
        report: <iframe className="report" title="primary features final - curbweight" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZjc4NjkwZDYtMDY1My00YjA1LWFiZDQtMDA2MjU4YmRkM2RiIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameBorder="0" allowFullScreen={true}></iframe>
    },

    {
        id: 1,
        description: "This report analyses how various features like price, mileage, horsepower and carbody type depend on the Customer Segment that the car is being targeted at.",

        list: ["The 5 customer segments identified and the number of cars belonging to that particular segment is displayed by the pie chart. Regular I and Regular II are the cheaper segment cars and offer relatively better mileage aimed at the middle class, most of the Business cars are wagons, Luxury cars are aimed at the high class and the cars which don't fit into any of the above segments are put into 'No Segment'. ",
        
        "Regular I consists of hatchbacks meanwhile Regular II consists of sedans only. Most of the Luxury cars are sedans and most Business cars are wagons. All the covertibles fall in the 'No Segment'. ohc is the dominant engine type in all the customer segments.",
        
        "mpfi fuel system is the most used fuel system and it is present in every customer segment. Luxury Segment has the highest average horsepower and the least average mileage. Regular II sedans have the highest mileage followed by Regular I hatchbacks, at the cost of poor horsepower.",
        
        "Regular I hatchbacks record the highest total sales at 7.2 M followed by Regular II at 5.5 M. The difference between total sales for Regular Segments and the Luxury Segment is way greater than the difference between their average sales. This points to the fact that there are fewer Luxury options available in the market but at a high demand thus the fewer total sales but more average sales. The price trend is rather self explanatory with Luxury cars being the highest priced ones followed by 'No Segment' cars.",

        "After the price point of ~16k USD it is clear that cars belonging to the Regular and Business Segments lose majority of their sales and the Luxury cars start dominating. Also the Business Segment turns out to be very niche in terms of the price segment and Regular Segment outperforms it in terms of sales even in that very segment. Finally it is clear from the number of car sales that cars belonging to no particular segment (or the 'No Segment') suffer tremendously. This is because they fail to appeal to any customer segment."
    ],

        report: <iframe className='report' title="Customer Segments final" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNTBlOWMzMzktMWNjMy00ZmJiLTg4MjctNGMyMjAwZTc3NDY4IiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    },

    {
        id: 2,
        description: "This report uncovers the most popular car specifications in each Customer Segment by analysing the top selling cars in that particular Segment.",
        list: [
            
        "The top 10 cars sold 13 M units in total out of the 16 M total sales. Top 10 cars by sales cover all the Customer Segments except the 'No Segment'. **Please note that a specific car model is mapped to a single Car Segment only. In the graph the legend shows different Segments corresponding to the same car name to represent different car models which share the same name.**",
        
        "The top 10 cars feature no convertibles. Hatchback turns out to be the most popular carbody type, followed closely by Sedan. While Regular I, Regular II and No segment feature a single body type (hatchback, sedan and convertible respectively) wagons and sedans dominate the market in Business and Luxury Segments respectively. 2 door cars turn out to be a popular opinion in top 10 cars of each segment except Business but lose to 4 door cars in total sales of all segments combined.",
         
        "ohc has virtually no competition from other engine types except in the 'No Segment' where no car uses ohc and dohc dominates the sales. On the whole ohc is the most popular engine type. On the first look 2bbl looks like a popular opinion but adjusting the lower limit of price range from 5k USD to 8k USD shows a completely opposite trend with mpfi dominating the sales. This continues to be true for hiher price points as well.",
    
        "Gas is clearly the popular fuel type as there is only 1 diesel car in the top 10 list (toyota corolla). Also 4 cylinders seem to dominate the market being way ahead of 6 cylinder car sales. There is not a single car with 2, 3, 5, 8 or 12 cylinder count in the top 10 list. This trend reverses for the Luxury segment with no luxury car featuring 4 cylinders and instead 6 cylinders take the lead.",

        "Standard aspiration is clearly the most popular aspiration type with all the top 10 cars featuring std aspiration. Only the Luxury segment's top 10 cars feature some amount of Turbo sales. While fwd seems to be the popular drivewheel option, all the Luxury segment cars feature rwd and 4wd dominates in the Business segment"
    ],

        report: <iframe className='report' title="Popular Car Specifications" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZjJmM2M0NGYtMjViMi00ODljLWE2ZmMtYjUzMzJjZGYzZjE4IiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSection" frameBorder="0" allowFullScreen={true}></iframe>
    },
    {
        id: 3,
        description: "This report analyses the changing sales trends of Customer Segments and different car specifications over the years (from 2018 to 2021)",
        list: [
            
        "While Regular I, Regular II and Luxury have maintained a consistent amount of sales percentage over the years, Business Segment seems to be growing steadily going from a sales percentage of 23 in2018 to 28 in 2021. On the other hand cars belonging to 'No Segment' are losing their share in sales rapidly going from 36% in 2018 to 21% in 2021 reinforcing the fact that customers need cars specific to their needs. Adjusting the price window reveals that 'No Segment' lost all it's sales after 2018 in the higher price bracket",

        "Althogh ohc has maintained maximum sales for 4 years straight, dohc average sales have improved considerably after 2018. The l engine type dropped from having a major portion of average sales in 2018 to negligible sales in 2021. The industry seems to have stopped using rotor as it has virtually zero sales across the board. Average Diesel car sales have increased significantly after 2018 going from 8k units to 67k units in 2019. Diesel seems like a good option as it is able to maintain comparable average sales with gas despite having fewer options available in the market as seen in the first report. At last an average 2 door car sales are better than 4 door cars across the board.", 
        
        "While hardtops doubled their sales going from 2018 to 2019, wagons have lost half of their sales going from 2018 to 2020. Standard aspiration car sales quickly recovered after the drop in 2020 but Turbo sales didn't recover."],

        report: <iframe className='report' title="year wise sales final" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMThlMDI3NTQtM2VkOC00NjI2LThjNzgtNmU5M2ZjNWUwNWUxIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSectionaa9160c08869bcb2862e" frameborder="0" allowFullScreen="true"></iframe>
    },
    {
        id: 4,
        description: "This report analyses car sales at a global level, revealing growing car markets.",
        list: [
            
        "Highest car sales are recorded in China (21 M) followed by North America (14 M) in the year 2021", 
        
        "Most developed countries like Canada, Japan, South Korea, Germany and Netherlands show a decreasing sales trend. The opposite is true for developing countries like India, South Africa, Iran, Mexico, etc."
    
        ],

        report: <iframe className='report' title="Global Sales" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWUyOWVmNmUtYjU0YS00ODFmLWE4NmItOGQ0NjQwZmJjYzhkIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    }
]