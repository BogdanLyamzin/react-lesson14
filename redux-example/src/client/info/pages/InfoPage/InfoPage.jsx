import Title from "../../components/Title"
import Content from "../../components/Content"

const ContactsPage = ({title, children})=>{
    return (
        <div className="info-page-content">
            <div className="container">
                <Title text={title} />
                <Content>
                    {children}
                </Content>
            </div>

        </div>
    )
}

export default ContactsPage;