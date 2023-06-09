const hasMeeting = false;

const meeting = new Promise((resolve, reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name:"Problem solving meeting",
            time:"1.00 PM",
            location:"Google meet"
        };

        resolve(meetingDetails);
    }else{
        reject(new Error("Already have an meeting!"));
    }
});

const addToCalender = (meetingDetails) => {
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calender);
}

async function myMeeting(){
    try {
        const meetingDetails = await meeting;

        const calender = await addToCalender(meetingDetails);
        console.log(calender);
    } catch (error) {
        console.log(error);
    }
}

myMeeting();