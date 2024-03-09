import logo from "./public/images/logo.png";

const config = {
    navbar: {
        logo: {
            src: logo,
            alt: "Raisa Fashion Designer",
        },
        links: [
            {
                name: "Home",
                link: "/",
            },
            {
                name: "About",
                link: "#about",
            },
            {
                name: "Projects",
                link: "#projects",
            },
            {
                name: "Contact",
                link: "#contact",
            },
        ],
    },
    contact: {
        title: "Contact",
        subTitle: "Let's Discuss Your Project",
        content:
            "I am always looking for new challenges and ways to improve my skills and knowledge. If you have a project that you would like to discuss, please feel free to contact me.",
        fields: [
            {
                fieldName: "Full name",
            },
            {
                fieldName: "Your email",
            },
            {
                fieldName: "Phone number",
            },
            {
                fieldName: "Budget",
            },
            {
                fieldName: "Message",
            },
        ],
    },
    contactInfo: {
        call: {
            fieldName: "Call me",
            value: "+880 1610 830286",
        },
        email: {
            fieldName: "Email me",
            value: "mdrokonuzzamanmail@gmail.com",
        },
        address: {
            fieldName: "Address",
            value: "Mirpur-6, Mirpur, Dhaka",
        }
    },
    footer: {
        leftContent: "@2023. All Rights Reserved",
        centerContent: "Designed by Rokon Uzzaman",
    },
};

export { config };