const defaultObjectSchema = () => {
    return {
        MLS: null,
        PropertyType: null,
        TimestampSql: null,
        PhotoLink: null,
        PhotoCount: 0,
        MinListPrice: null,
        MaxListPrice: null,
        PriceTracker: [],
        SearchAddress: null,
    };
};
        
module.exports = defaultObjectSchema;