export default[
    {
        id: 0,
        description: "This report details how primary features like curbweight, engine type, carbody type, fuel system, etc. affect the secondary features like horsepower, mileage and price.",


        list: ["High curbweight usually results in less mileage. Horsepower seems to increase with the curbweight of the car", 
        
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
        description: "second report talks about the ",

        list: ["The 5 customer segments identified and the number of cars belonging to that particular segment is displayed by the pie chart. Regular I and Regular II are the cheaper segment cars and offer relatively better mileage aimed at the middle class, most of the Business cars are wagons, Luxury cars are aimed at the high class and the cars which don't fit into any of the above segments are put into 'No Segment' ",
        
        "Regular I consists of hatchbacks meanwhile Regular II consists of sedans only. Most of the Luxury cars are sedans and most Business cars are wagons. All the covertibles fall in the 'No Segment'. ohc is the dominant engine type in all the customer segments.",
        
        "mpfi fuel system is the most used fuel system and it is present in every customer segment. Luxury Segment has the highest average horsepower and the least average mileage. Regular II sedans have the highest mileage followed by Regular I hatchbacks, at the cost of poor horsepower.",
        
        "Regular I hatchbacks record the highest total sales at 7.2 M followed by Regular II at 5.5 M. The difference between total sales for Regular Segments and the Luxury Segment is way greater than the difference between their average sales. This points to the fact that there are fewer Luxury options available in the market but at a high demand thus the fewer total sales but more average sales. The price trend is rather self explanatory with Luxury cars being the highest priced ones followed by 'No Segment' cars.",

        "After the price point of ~16k USD it is clear that cars belonging to the Regular and Business Segments lose majority of their sales and the Luxury cars start dominating. Also the Business Segment turns out to be very niche in terms of the price segment and Regular Segment outperforms it in terms of sales even in that very segment. Finally it is clear from the number of car sales that cars belonging to no particular segment (or the 'No Segment') suffer tremendously. This is because they fail to appeal to any customer segment."
    ],

        report: <iframe className='report'  title="Customer Segments final - Customer Segments" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNTBlOWMzMzktMWNjMy00ZmJiLTg4MjctNGMyMjAwZTc3NDY4IiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
    },

    {
        id: 2,
        description: "third report",
        list: [
            
        "The top 10 cars sold 13 M units in total out of the 16 M total sales. Top 10 cars by sales cover all the Customer Segments except the 'No Segment'. **Please note that a specific car model is mapped to a single Car Segment only. In the graph the legend shows different Segments corresponding to the same car name to represent different car models which share the same name.**",
        
        "The top 10 cars feature only 3 car body types: sedan, hatchback and hardtop. Sedan turns out to be the most popular carbody type, followed closely by hatchback. While Regular I, Regular II and No segment feature a single body type (hatchback, sedan and convertible respectively) wagons and sedans dominate the market in Business and Luxury Segments respectively. 2 door cars turn out to be a popular opinion in all segments except Business but lose to 4 door cars in average sales of all segments combined.",
         
        "ohc has virtually no competition from other engine types except in the 'No Segment' where no car uses ohc and dohc dominates the sales. On the whole ohc is the most popular engine type. On the first look 2bbl looks like a popular opinion but adjusting the lower limit of price range from 5k USD to 8k USD shows a completely opposite trend with mpfi dominating the sales. This continues to be true for hiher price points as well."],

        report: <iframe className='report' title="Popular Car Specifications - Popular aspiration and drivewheel" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZjJmM2M0NGYtMjViMi00ODljLWE2ZmMtYjUzMzJjZGYzZjE4IiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSection" frameBorder="0" allowFullScreen={true}></iframe>
    },
    {
        id: 3,
        description: "fourth report",
        list: ["one", "two", "three"],

        report: <iframe className='report' title="year wise sales - Customer Segments" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNmJjM2JiNmQtZTQxOC00NTZhLWJkYmMtYTc3MzRhZGM0ZjA1IiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameBorder="0" allowFullScreen={true}></iframe>
    },
    {
        id: 4,
        description: "fifth report",
        list: ["one", "two", "three"],

        report: <iframe className='report' title="Global Sales" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWUyOWVmNmUtYjU0YS00ODFmLWE4NmItOGQ0NjQwZmJjYzhkIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    }
]