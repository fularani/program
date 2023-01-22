import React from 'react';
import axios from "axios";

interface Institute {
    id: number;
    attributes:{
        institute_name: string;
        // created_at: any;
        // updated_at: any;
        // published_at: any;
    }    
}

interface Branch {
    id: number;
    attributes:{
        branch_name: string;
        // created_at: any;
        // updated_at: any;
        // published_at: any;
    }    
}

interface Course {
    id: number;
    attributes:{
        course_name: string;
        // created_at: any;
        // updated_at: any;
        // published_at: any;
    }    
}
  
const IndexView = () => {

    const [instituteAPIData, setinstituteAPIData] = React.useState<Institute[]>([])
    const [branchAPIData, setbranchAPIData] = React.useState<Branch[]>([])
    const [courseAPIData, setcourseAPIData] = React.useState<Course[]>([])

    const getData=async()=>{
        const iresponse = await axios.get("http://localhost:1337/api/institutes", {
        headers: {
          Accept: "application/json",
        },
        });
        const idata: Institute[] = iresponse.data.data;

        const bresponse = await axios.get("http://localhost:1337/api/branches", {
        headers: {
          Accept: "application/json",
        },
        });
        const bdata: Branch[] = bresponse.data.data;

        const cresponse = await axios.get("http://localhost:1337/api/courses", {
        headers: {
          Accept: "application/json",
        },
        });
        const cdata: Course[] = cresponse.data.data;

    //   console.log("getData() Response",response.data.data);     
    
        setinstituteAPIData(idata)
        setbranchAPIData(bdata)
        setcourseAPIData(cdata)
    }

    React.useEffect(() => {
        getData()
    }, [])
    
  return (
    <div>
      <div style={{'display':'flex',"flexDirection":'column','rowGap':'13px'}}>
        <select className="form-select" name="institute" id="institute"
        // size={10}
        required>
        <option className="placeholder" value="" style={{'color':'#636c72'}} selected disabled hidden>Institute Name</option>
            {
                instituteAPIData.map((item)=>{
                    return(
                        <option value={item.attributes.institute_name} key={item.id}>
                            {item.attributes.institute_name}
                        </option>
                    )
                })
            }
        </select> 
        <select className="form-select" name="institute" id="institute"
        // size={10}
        required>
        <option className="placeholder" value="" style={{'color':'#636c72'}} selected disabled hidden>Branch Name</option>
            {
                branchAPIData.map((item)=>{
                    return(
                        <option value={item.attributes.branch_name} key={item.id}>
                            {item.attributes.branch_name}
                        </option>
                    )
                })
            }
        </select> 
        <select className="form-select" name="institute" id="institute"
        // size={10}
        required>
        <option className="placeholder" value="" style={{'color':'#636c72'}} selected disabled hidden>Course Name</option>
            {
                courseAPIData.map((item)=>{
                    return(
                        <option value={item.attributes.course_name} key={item.id}>
                            {item.attributes.course_name}
                        </option>
                    )
                })
            }
        </select>      
      </div>
    </div>
  )
}

export default IndexView
