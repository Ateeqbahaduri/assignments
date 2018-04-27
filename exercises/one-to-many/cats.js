









    
    type: String
},
age: Number,
adoptionStatus: {
    type: String,
    default: "not adopted"
},
agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "agencies"

}