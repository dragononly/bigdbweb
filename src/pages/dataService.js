class DataService {
    constructor() {
        this.employees = [
            {
                name: "Nancy Freehafer",
                phone: "(123)555-5100",
                country: "US",
                email: "mailto:nancy@northwindtraders.com",
                onJob: true
            },
            {
                name: "Andrew Cencini",
                phone: "(123)555-5101",
                country: "UK",
                email: "mailto:andrew@northwindtraders.com",
                onJob: false
            },
            {
                name: "Jan Kotas",
                phone: "(123)555-5102",
                country: "Germany",
                email: "mailto:jan@northwindtraders.com",
                onJob: true
            },
            {
                name: "Mariya Sergienko",
                phone: "(123)555-5103",
                country: "US",
                email: "mailto:mariya@northwindtraders.com",
                onJob: true
            },
            {
                name: "Steven Thorpe",
                phone: "(123)555-5104",
                country: "Mexico",
                email: "mailto:steven@northwindtraders.com",
                onJob: false
            },
            {
                name: "Michael Neipper",
                phone: "(123)555-5105",
                country: "US",
                email: "mailto:michael@northwindtraders.com",
                onJob: true
            },
            {
                name: "Robert Zare",
                phone: "(123)555-5106",
                country: "UK",
                email: "mailto:robert@northwindtraders.com",
                onJob: true
            },
            {
                name: "Laura Giussani",
                phone: "(123)555-5107",
                country: "US",
                email: "mailto:laura@northwindtraders.com",
                onJob: false
            },
            {
                name: "Anne Hellung-Larsen",
                phone: "( 123)555-5108",
                country: "US",
                email: "mailto:anne@northwindtraders.com",
                onJob: true
            },
            {
                "name": "Andorra",
                "phone": "(123)555-5109",
                "country": "Germany",
                "email": "mailto:andorra@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "United Arab Emirates",
                "phone": "(123)555-5110",
                "country": "UK",
                "email": "mailto:united@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Afghanistan",
                "phone": "(123)555-5111",
                "country": "US",
                "email": "mailto:afghanistan@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Antigua and Barbuda",
                "phone": "(123)555-5112",
                "country": "UK",
                "email": "mailto:antigua@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Anguilla",
                "phone": "(123)555-5113",
                "country": "UK",
                "email": "mailto:anguilla@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Albania",
                "phone": "(123)555-5114",
                "country": "Germany",
                "email": "mailto:albania@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Armenia",
                "phone": "(123)555-5115",
                "country": "US",
                "email": "mailto:armenia@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Netherlands Antilles",
                "phone": "(123)555-5116",
                "country": "UK",
                "email": "mailto:netherlands@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Angola",
                "phone": "(123)555-5117",
                "country": "UK",
                "email": "mailto:angola@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Antarctica",
                "phone": "(123)555-5118",
                "country": "UK",
                "email": "mailto:antarctica@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Argentina",
                "phone": "(123)555-5119",
                "country": "US",
                "email": "mailto:argentina@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "American Samoa",
                "phone": "(123)555-5120",
                "country": "US",
                "email": "mailto:american@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Austria",
                "phone": "(123)555-5121",
                "country": "Germany",
                "email": "mailto:austria@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Australia",
                "phone": "(123)555-5122",
                "country": "US",
                "email": "mailto:australia@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Aruba",
                "phone": "(123)555-5123",
                "country": "US",
                "email": "mailto:aruba@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Azerbaijan",
                "phone": "(123)555-5124",
                "country": "UK",
                "email": "mailto:azerbaijan@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Bosnia and Herzegovina",
                "phone": "(123)555-5125",
                "country": "Germany",
                "email": "mailto:bosnia@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Barbados",
                "phone": "(123)555-5126",
                "country": "US",
                "email": "mailto:barbados@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Bangladesh",
                "phone": "(123)555-5127",
                "country": "UK",
                "email": "mailto:bangladesh@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Belgium",
                "phone": "(123)555-5128",
                "country": "UK",
                "email": "mailto:belgium@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Burkina Faso",
                "phone": "(123)555-5129",
                "country": "US",
                "email": "mailto:burkina@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Bulgaria",
                "phone": "(123)555-5130",
                "country": "UK",
                "email": "mailto:bulgaria@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Bahrain",
                "phone": "(123)555-5131",
                "country": "Germany",
                "email": "mailto:bahrain@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Burundi",
                "phone": "(123)555-5132",
                "country": "Germany",
                "email": "mailto:burundi@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Benin",
                "phone": "(123)555-5133",
                "country": "Germany",
                "email": "mailto:benin@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Bermuda",
                "phone": "(123)555-5134",
                "country": "UK",
                "email": "mailto:bermuda@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Brunei",
                "phone": "(123)555-5135",
                "country": "US",
                "email": "mailto:brunei@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Bolivia",
                "phone": "(123)555-5136",
                "country": "US",
                "email": "mailto:bolivia@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Brazil",
                "phone": "(123)555-5137",
                "country": "UK",
                "email": "mailto:brazil@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Bahamas, The",
                "phone": "(123)555-5138",
                "country": "US",
                "email": "mailto:bahamas,@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Bhutan",
                "phone": "(123)555-5139",
                "country": "US",
                "email": "mailto:bhutan@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Bouvet Island",
                "phone": "(123)555-5140",
                "country": "UK",
                "email": "mailto:bouvet@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Botswana",
                "phone": "(123)555-5141",
                "country": "US",
                "email": "mailto:botswana@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Belarus",
                "phone": "(123)555-5142",
                "country": "UK",
                "email": "mailto:belarus@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Belize",
                "phone": "(123)555-5143",
                "country": "UK",
                "email": "mailto:belize@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Canada",
                "phone": "(123)555-5144",
                "country": "Germany",
                "email": "mailto:canada@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Cocos (Keeling) Islands",
                "phone": "(123)555-5145",
                "country": "Germany",
                "email": "mailto:cocos@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Congo (DRC)",
                "phone": "(123)555-5146",
                "country": "Germany",
                "email": "mailto:congo@northwindtraders.com",
                "onJob": true
            },
            {
                "name": "Central African Republic",
                "phone": "(123)555-5147",
                "country": "US",
                "email": "mailto:central@northwindtraders.com",
                "onJob": false
            },
            {
                "name": "Congo",
                "phone": "(123)555-5148",
                "country": "US",
                "email": "mailto:congo@northwindtraders.com",
                "onJob": false
            }
        ];
        this.airports = [
            {
                "name": "Hartsfield Jackson Atlanta International Airport",
                "code": "ATL",
                "city": "Atlanta",
                "state": "GA",
                "lat": 33.64,
                "lon": -84.444,
                "pop2011": 432427,
                "vol2011": 44414121,
                "vol2010": 43130585,
                "vol2009": 42280868,
                "vol2008": 43236665,
                "vol2007": 43236665,
                "vol2006": 41352038,
                "vol2005": 42402653
            },
            {
                "name": "O'Hare International Airport",
                "code": "ORD",
                "city": "Chicago",
                "state": "IL",
                "lat": 41.9794,
                "lon": -87.9044,
                "pop2011": 2707120,
                "vol2011": 31892301,
                "vol2010": 32171831,
                "vol2009": 31135732,
                "vol2008": 33683991,
                "vol2007": 36521585,
                "vol2006": 36825097,
                "vol2005": 36720005
            },
        ];
        this.personAddress = [
            {
                "Name": "Andorra",
                "CountryRegionCode": "AD",
                "City": "Bothell",
                "AddressLine": "1970 Napa Ct.",
                "PostalCode": 98011
            },
            {
                "Name": "United Arab Emirates",
                "CountryRegionCode": "AE",
                "City": "Bothell",
                "AddressLine": "9833 Mt. Dias Blv.",
                "PostalCode": 98011
            },
            {
                "Name": "United Arab Emirates",
                "CountryRegionCode": "AE",
                "City": "Bothell",
                "AddressLine": "9833 Mt. Dias Blv.",
                "PostalCode": 98011
            },
        ]

    }
    getAirpotsData() {
        return this.airports;
    }

    getEmployeesData() {
        return this.employees;
    }

    getPersonAddressData() {
        return this.personAddress;
    }
}

export default new DataService()