import "./index.css";
import {Component} from "react";
import QuestionsList from "../QuestionsList";

const questions = [
    {
        id:"1",
        questions:"How much does it cost to set up a store?",
        answer:"Startup costs average around $48,000, varying by location and specific needs. Varies significantly by scale, from a few hundred dollars for a simple event to over $10,000 for large-scale openings.",
        toggle:false
    },
    {
        id:"2",
        questions:"What kind of digital products i can sell?",
        answer:"Online courses,Tutorials,Memberships,eBooks,Templates,Recipes,Photography,Stock videos.",
        toggle:false
    },
    {
        id:"3",
        questions:"Do i need technical skills to use the platform?",
        answer:"Technical skills are the specialized knowledge and expertise required to perform specific tasks and use specific tools and programs in real world situations. Diverse technical skills are required in just about every field and industry, from IT and business administration to health care and education.",
        toggle:false
    },
    {
        id:"4",
        questions:"Is there a limit the number of products I can list?",
        answer:"Technically, no. Shopify can handle an unlimited number of products. However, operational and strategic considerations will guide how many products you should list.",
        toggle:false
    },
    {
        id:"5",
        questions:"How do i receive payments for my sales?",
        answer:"Automated clearing house (ACH) is a network that moves money electronically between bank accounts in the United States. This is how you receive money if you're ever paid by direct deposit. To accept payments via ACH transfer, you generally don't need any special capabilities.",
        toggle:false
    },
    {
        id:"8",
        questions:"Can I sell internationally on this maketplace?",
        answer:"Log in to your Facebook account. Click the dropdown arrow at the top right corner of your screen and select the Settings option. In the left-side menu, choose Country/Region. Enter your desired country or region in the popup window.",
        toggle:false
    },
    {
        id:"6",
        questions:"What support and resources are available for sellers?",
        answer:"The Seller Support organization is at the forefront of engaging sellers, and building tools and programs to make them successful and enhancing the seller experience.",
        toggle:false
    },
    {
        id:"7",
        questions:"I there a review process for upload products?",
        answer:"A product review is an evaluation or critique of a product, created by a consumer or expert, which provides an in-depth analysis of the item's features, functionality, and overall performance.",
        toggle:false
    }
]

class Questions extends Component{
            state = {
                questionsList:questions
            }

            changeToggle = (id) => {
                const {questionsList} = this.state
                     const newquestionsList = questionsList.map(each => {
                     if (id === each.id) {
                             return {
                                  ...each,
                                  toggle: !each.toggle,
                             }
                    }
                              return each
    })
    this.setState({questionsList: newquestionsList})
            }

            render(){
                const {questionsList} = this.state
                return(
                  <div>
                    <div className="headings-con">
                        <h1 className="frequent-head">FREQUENTLY ASKED QUESTIONS</h1>
                        <p className="para-ans">Quick answers to questions you may have.Can't find what you are looking for?</p>
                        <p className="doc-para">Check out our full documentation?</p>
                    </div>
                    <ul className="unordered-list">
                        {questionsList.map(each => (
                            <QuestionsList key={each.id} changeToggle={this.changeToggle} item={each}/>
                        ))}
                    </ul>
                  </div>
                );
            }
}

export default Questions