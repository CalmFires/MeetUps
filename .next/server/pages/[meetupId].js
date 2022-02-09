(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 3780:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "MeetupDetail_details___Nlf_"
};


/***/ }),

/***/ 1213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react/cjs/react.production.min"
const react_production_min_namespaceObject = require("react/cjs/react.production.min");
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(3780);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js



function MeetupDetail(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).details,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.address
            })
        ]
    }));
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

;// CONCATENATED MODULE: ./pages/[meetupId]/index.js





function MeetupDetails(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_production_min_namespaceObject.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: " React Meetups Details"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "add new meetups"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                description: props.meetupData.description,
                title: props.meetupData.title,
                address: props.meetupData.address,
                image: props.meetupData.image
            })
        ]
    }));
}
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://calmfires:1.0Hellofriend.mov@cluster0.ytmtm.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups1 = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups1.map((meetups)=>({
                params: {
                    meetupId: meetups._id.toString()
                }
            })
        )
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://calmfires:1.0Hellofriend.mov@cluster0.ytmtm.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: (0,external_mongodb_.ObjectId)(meetupId)
    });
    console.log(selectedMeetup);
    const meetupData = {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.data.title,
        image: selectedMeetup.data.image,
        address: selectedMeetup.data.address,
        description: selectedMeetup.data.description
    };
    client.close();
    return {
        props: {
            meetupData
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1213));
module.exports = __webpack_exports__;

})();