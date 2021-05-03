export interface Place {
    Name: String;
    Description: String;
    Address: {
        Location: {
            Lat: String,
            Lon: String
        }
        Text: String,
        Department: String,
        City: String,
        PostalCode: String
    };

}