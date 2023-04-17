import React, {useState,setState} from 'react'; 
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 
import DatePicker from 'react-date-picker';
import {useRef} from 'react';
import Header from './header';

function Register() {
    
	
	
	const ref1 = useRef(null);
	const handleClick  = () => { 
		ref1.current?.scrollIntoView({behavior: 'smooth'});
	}
	
	const handleParticipent  = () => { 
		setindex(index+1); 
	}
	
	const [DateGet, onChange] = useState(new Date()); 
 
    const [email, setEmail] = useState(null);
    const [Persons,setPersons] = useState(null); 
	const [Message,setMessage] = useState(null); 
	const [index, setindex] = useState(0);
	const [Signature, setSignature] = useState(null);
	
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
         
		if(id === "persons"){
			 
            setPersons(value);
        }
		 if(id === "Signature"){
			 
            setSignature(value);
        }
		 
		if(id === "participating"){
            setparticipating(value);
        }
		if(id === "p_first_name"){
            setp_first_name(value);
        }
		if(id === "p_last_name"){
            setp_last_name(value);
        }
    }

	 
	
    const checkList = Array(100).fill(1);
    const [checked, setChecked] = useState([]); 
	const handleSubmit  = () => {
		  
          let obj = {
            email:email,
			Participating:[part], 	
            NumberOfParticipents:Persons,
			Participants:[fname,lname],
			
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
	setMessage("Successfully Booked!");
    return update(ref(database), updates);
	
    }
	const [first_name, setfirst_name] = useState([]);
	const [p_first_name, setp_first_name] = useState([]);
	const [p_last_name, setp_last_name] = useState([]);
	const [last_name, setlast_name] = useState([]);
	const [participating, setparticipating] = useState([]);
	
	const [fname, setfname] = useState({});
	const [lname, setlname] = useState([]);
	const [part, setpart] = useState([]);
	const [dob, setdob] = useState(new Date());
	
	const [Dobs, setlDobs] = useState([]);
	const handleDateChange = (index) => {  
	  //const valueOfInput = date.format(); 
	    Dobs[index] = { 
		 [ 'DateOfBirth' ]: dob
		}
	   //setdob(dob);
	}; 
	const handleParticipentChange = (e) => { 
		var is_participating = "";
		if(e.target.checked == true){
			is_participating = "Yes";
		}else{
			is_participating = "N0";
		}
			
		participating[e.target.id] = e.target.value; 	
		part[e.target.id] = { 
		  [ 'isparticipating' ]: is_participating
		}
		setparticipating(participating);  
		
	 }
	const handleFirstChange = (e) => { 
		 
		first_name[e.target.id] = e.target.value; 	
		fname[e.target.id] = { 
		  [ 'firstnames' ]: e.target.value
		}
		setfirst_name(first_name);  
		
	 }
	   const handleLastChange = (e) => { 
		 
		last_name[e.target.id] = e.target.value; 	
		lname[e.target.id] = { 
		  [ 'lastnames' ]: e.target.value
		} 
		setlast_name(last_name); 
		
		
	 }
	 
	 function showData() {
	   if(email == null){
		   alert("fill out email !");
		   return false;
	   }else{
			sethideinputs(false);
	   }
	}
	const [hideinputs, sethideinputs] = useState(true); 
    return(
	
	<div>
	<Header/>	
	<div class="container row" > 
	  
	<div class="col-md-4"></div> 
	<div class="col-md-6"> 
	<div class="row mt-4"><h2>Waiver</h2></div>
        <div className="form">
            <div className="form-body">
			
				  
			
				{Message ? <div class="alert alert-success" role="alert">{Message}</div> : null}
                <div className="email">
                    <label className="form__label mt-2" for="email"> </label>
                    <input  type="email" id="email" className="form-control" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
					<button className= {hideinputs ? "d-block  mt-2" : "d-none   mt-2"} onClick={showData}>Continue</button>

				</div>
				
				<div>
				
				<div className= {hideinputs ? "d-none col-md-5" : "d-block col-md-5"} >
                    <label className="form__label " for="confirmPassword"> </label>
                    <input className="form-control" type="number" min="1" id="persons" value={Persons} onChange = {(e) => handleInputChange(e)} placeholder="Number of Participents "/>
                </div>
				
				<div className= {hideinputs ? "d-none col-md-5 mt-2" : "d-block col-md-5 mt-2"} > 
						<input className="form-control"  value={p_first_name[index]} id = {index}  name = "p_first_name" type="text"  onChange = {(e) => handleFirstChange(e)} placeholder="First Name "/>
					</div>
					<div className= {hideinputs ? "d-none col-md-5 mt-2" : "d-block col-md-5 mt-2"}> 
						<input className="form-control" value={p_last_name[index]} id = {index} name = "p_last_name" type="text"  onChange = {(e) => handleLastChange(e)} placeholder="Last Name "/>
					</div>
				 <div className= {hideinputs ? "d-none col-md-5 mt-2" : "d-block col-md-5 mt-2"}> 
						<input className="form-control" type="text" id="Signature" value={Signature} onChange = {(e) => handleInputChange(e)} placeholder="Signature "/>	
					</div> 
				<div id = "Addition"></div>
				
				  
			    {checkList.map((item, index) => (
					index < Persons && (
					<div key={index}>
						  
					<div className="col-md-5 mt-5"> 
						<input className="form-control"  value={first_name[index]} id = {index}  name = "first_name" type="text"  onChange = {(e) => handleFirstChange(e)} placeholder="First Name "/>
					</div>
					<div className="col-md-5 mt-2"> 
						<input className="form-control" value={last_name[index]} id = {index} name = "last_name" type="text"  onChange = {(e) => handleLastChange(e)} placeholder="Last Name "/>
					</div> 
					
					 <div className="col-md-5">
                    <DatePicker className="form__label mt-2 form-control" name = "dob" id = {dob} onChange = {setdob}  onchange = {handleDateChange(index)}  value={dob} />
                </div>
					
					
					<div id = "Addition"></div>
					
					<div className="col-md-3 mt-2">
						<label>Participating</label>
						<input class="check" type="checkbox" value={participating[index]} onChange = {(e) => handleParticipentChange(e)} id = {index}  name = "participating"   />
				  
					</div>
						
					
						
					</div>
					)
				))}	
				
			
		
            </div>
            <div className= {hideinputs ? "d-none container row" : "d-block container row"}>
	
		<p class="consent mt-5">I  <strong>{Signature}</strong> , the undersigned on my behalf and, if applicable, my child/ward named below (hereinafter “RELEASOR“), hereby acknowledge that I and my child/ward, desire to voluntarily participate in the activities and services provided by Tojee Investment US LLC. Catch Air and its affiliates, instructors, officers, managers, agents, employees, designers, licensors, and members, as well as the property owner and tenants of the property and the owners, manufacturers and installers of the equipment comprising the Catch Air facility (collectively, “CATCH AIR” or “RELEASEES”), including but not limited to, the use of the equipment, facilities, trampolines, inflatable jump houses, receiving instructions, strenuous bodily movement, and the premises (hereinafter collectively referred to as “CATCH AIR ACTIVITIES & SERVICES”), and further agree and acknowledge as follows: ASSUMPTION OF RISK: I, the undersigned, understand and acknowledge that CATCH AIR ACTIVITIES & SERVICES have varying effects on individuals based upon their size, age, physical condition and/or state of health. I further recognize, acknowledge and agree that it is my sole decision whether to consult with medical professional prior to participating in CATCH AIR ACTIVITIES & SERVICES and that CATCH AIR recommends that participants consult with a medical professional prior to participating in CATCH AIR ACTIVITIES & SERVICES, especially if a member has had a recent injury, surgery, pregnancy or other health conditions. I, and/or my child/ward, have either consulted a physician and received medical advice and consent to participation in CATCH AIR ACTIVITIES & SERVICES or have waived such advice and consent of physician and accept any and all RISKS. I am assuming, on behalf of myself and/or child/ward, all risk of personal injury, death, or disability to myself and /or child/ward that my result from participation, or any damage, loss or theft of any personal property which me and/or child/ward may incur. I am aware, understand and acknowledge that participation in CATCH AIR ACTITIVIES & SERVICES is a potentially hazardous activity and involves inherent risks of danger or injury, including but not limited to, sprains, strains, fractures, concussions, contusions, lacerations, abnormal blood pressure, heart disorders, fainting, shortness of breath, chest pain, strokes, heart attack, or even death that can occur (hereinafter collectively referred to as “RISKS“). I am voluntarily participating in CATCH AIR ACTIVITIES & SERVICES with the knowledge of the danger involved with the RISKS and with the knowledge that staff assistance and/or medical facilities may not be available in the event of illness or injury. I HEREBY AGREE TO ACCEPT ANY AND ALL RISK OF INJURY, ILLNESS, OR DEATH INHERENT IN CATCH AIR ACTIVITIES & SERVICES AND VERIFY THIS STATEMENT BY PLACING MY SIGANTURE BELOW. RELEASE OF LIABILITY: I understand that I, and/or my child/ward, will be engaging in CATCH AIR ACTIVITIES & SERVICES using the CATCH AIR facilities and it is my voluntary and informed decision to release any future lawsuits or claims that I and/or they have or may have against the RELEASEES. RELEASOR EXPRESSLY RELEASES AND FOREVER DISCHARGES AND HOLDS HARMLESS RELEASEES FROM ANY AND ALL PAST, PRESENT AND FUTURE LIABILITY, CLAIMS, DEMANDS OR CAUSES OF ACTION WHATSOEVER ARISING OUT OF THEIR ACTS AND/OR OMISSIONS, INCLUDING BUT NOT LIMITED TO, DEMANDS, OBLIGATIONS, ACTIONS, CAUSES OF ACTION, RIGHTS, DAMAGES, COSTS, NEGLIGENCE CLAIMS, GROSS NEGLIGENCE CLAIMS, ASSAULT CLAIMS, DECEPTIVE TRADE PRACTICE CLAIMS, CONTRACT CLAIMS, INTENTIONAL INFLICTION OF EMOTIONAL DISTRESS CLAIMS, PERSONAL INJURY CLAIMS, PREMISES LIABILITY CLAIMS, PRINCIPAL-AGENT LIABILITY CLAIMS, MENTAL ANGUISH CLAIMS, PAIN AND SUFFERING CLAIMS, PHYSICAL IMPAIRMENT CLAIMS, DISFIGUREMENT CLAIMS, LOST WAGES CLAIMS, LOSS OF EARNING CAPACITY CLAIMS, WARRANTY CLAIMS, PUNITIVE DAMAGES CLAIMS, EXEMPLARY DAMAGES CLAIMS, AND ANY OTHER FORM OF COMPENSATORY CLAIMS OF ANY NATURE WHATSOEVER, WHETHER BASED ON A TORT, CONTRACT, OR OTHER THEORY OF RECOVERY,
		WHETHER SAME BE KNOWN AND REALIZED OR UNKNOWN AND NOT REALIZED, THAT I, MY ASSIGNEES, HEIRS, DISTRIBUTES, GUARDIANS OR LEGAL REPRESENTATIVES NOW
		HAVE, HAVE HAD, OR EVER WILL HAVE; FOR INJURY, ILLNESS, DEATH, OR DAMAGE RESULTING FROM MY PARTICIPATION IN CATCH AIR ACTIVITIES & SERVICES AND THE RISKS
		INVOLVED WITH SAME. THIS RELEASE IS INTENDED BY BOTH PARTIES TO BE AS BROAD IN ITS EFFECT AS ALLOWED BY LAW. This release is valid and effective whether the damage,
		loss, or death is a result of any act or omission on the part of accidents, which may occur as a result of the: (a) use or misuse of the facility in any way by anyone; (b) use of any equipment that
		malfunctions or breaks; (c) improper maintenance of the facility, grounds or any equipment; (d) instruction or supervision; or (e) slipping, tripping and/or falling while in the facility or on the surrounding
		premises.
		As consideration for being permitted by CATCH AIR to participate in CATCH AIR ACTIVITIES & SERVICES, I hereby agree that I, my assignees, heirs, distributes, guardians, and legal representatives
		will not make a claim against, or sue CATCH AIR or its past, present or future parent, subsidiaries, affiliates, other related entities, successors, owners, members, managers, officers, agents, employees,
		servants, assigns, investors, legal representatives, and all individuals, and entities involved in the operations of CATCH AIR for injury, illness, death or damage resulting from my participation in CATCH
		AIR ACTIVITIES & SERVICES and the RISKS involved therein.
		I further grant CATCH AIR the right to photograph, videotape, and/or record me and/or my child/ward and to use my or my child’s/ward’s name, face, likeness, voice and appearance in connection with
		exhibitions, publicity, advertising, and promotional materials without reservation or limitation.
		I HAVE CAREFULLY READ THIS WAIVER, RELEASE OF LIABILITY AND ASSUMPTION OF RISK AGREEMENT IN ITS ENTIRETY AND FULLY UNDERSTAND ITS CONTENTS. I AM AWARE THAT
		THIS IS A WAIVER, RELEASE OF LIABILITY, ASSUMPTION OF RISK AGREEMENT AND A LEGAL CONTRACT BETWEEN ME AND CATCH AIR AND THAT IT AFFECTS MY LEGAL RIGHTS. I AM
		SIGNING THIS DOCUMENT OF MY OWN FREE WILL.</p>
	
	</div>
		</div>	
		</div>	
        
		
		
		
			
<div class="col-md-2"></div> 
		<div className= {hideinputs ? "d-none footer mt-4" : "d-block footer mt-4"}>
                <Button onClick={()=>handleSubmit()} type="submit" class="btn">Book Now</Button>	
            </div>
		
 </div> 
		
		
		
		
		
		
	</div>	
    
</div>





	
    )       
}

export default Register