//dummy data for jobs
//job data needed to render DayOverview in Mainstack
const jobs = {
  jobs: [
    {
        belongsTo_employer: {
          fName: "John",
          lName: "Smith",
          email: "js@js.com",
          entity: "JS Plumbing",
          mobile: "0789765788",
          avatar: "Not Available",
          _id: 1
        },
        location_client: {
          clientName: "Adolf Hitman",
          clientContact: "098977968",
          propertyName: "Nazi Bunker",
          avatar: "Not Available",
          location: {
            number: "2",
            street: "Bunn St",
            postcode: "2009",
            city: "Pyrmont",
            country: "Australia"
          },
          _id: 8
        },
        tasks: [
          {
            content: "Paint the wall",
            _id: 11
          },
          {
            content: "Sweep the floor",
            _id: 12
          },
          {
            content: "Fix the roof",
            _id: 13
          },
          {
            content: "Build the house",
            _id: 14
          }
        ],
        jobTitle: "John's Mosman Home",
        jobDescription: "Month end maintenence",
        jobDate: "1498281728315",
        assignedTo_employee: [
          {
            fName: "Elon",
            lName: "Musk",
            email: "em@em.com",
            mobile: "0875646352",
            avatar: "Not Available",
            _id: 3
          },
          {
            fName: "Vladimir",
            lName: "Putin",
            email: "vp@kremlin.com",
            mobile: "2343467235",
            avatar: "Not Available",
            _id: 4
          },
        ],
        comment: [
          {
            belongsTo_user: {
              fName: "Barack",
              lName: "Obama",
              email: "plotus@plotus.com",
              entity: "White House Cleaning Service",
              mobile: "897762343",
              avatar: "Not Available",
              _id: 2
            },
            content: "Hello world from the other world"
          },
          {
            belongsTo_user: {
              fName: "Vini",
              lName: "Vici",
              email: "vv@doof.com",
              mobile: "298764325",
              avatar: "Not Available",
              _id: 6
            },
            content: "This job is almost impossible!"
          }
        ],
    },
  ]
};

// module.exports = JSON.stringify(jobs);
module.exports = jobs;
