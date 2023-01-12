const styles = {
    taskContainer : {
        justifyContent:"center",
        display:"flex",

    },
    taskWrapper:{
    
        marginBottom:12,
        width:"80%",
        textAlign:"center",
        borderRadius:4,
        alignSelf:"center",
        display:"flex",
        justifyContent:"space-between",
        boxShadow:"0 10px 15px 15px rgba(0, 0, 0, 0.1)",

    },
    task:{
        textAlign:"right",
        textDecoration:"none",
        paddingLeft:20,
        fontSize:20,

    },
    iconsWrapper:{
        paddingTop:5,

    },
    completedIcon:{
        fontSize:20,
        paddingTop:15,
        color: "springgreen",
        cursor:"pointer",
    },
    deletedIcon:{
        fontSize:20,
        paddingTop:15,
        color:"red",
        paddingLeft:10,
        paddingRight:20,
        cursor:"pointer",


    }

};

export default styles;