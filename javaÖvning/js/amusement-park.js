console.log("\nAmusement Park Code:\n");
const createVisitor = (names, age, ticketId) => {
  var obj = {};
  obj.name = names;
  obj.age = age;
  obj.ticketId = ticketId;
  return obj;
};
console.log(createVisitor("Verena Nardi", 45, "H32AZ123"));

const revokeTicket = (who) => {
  who.ticketId = null;
  return who;
};
var visitor = createVisitor("Verena Nardi", 45, "h32AZ123");
console.log(revokeTicket(visitor));

const ticketStatus = (ticketList, ticket) => {
  if (ticket in ticketList) {
    if (ticketList[ticket] != null) {
      return `Ticket sold to ${ticketList[ticket]}`;
    } else {
      return "Ticket not sold yet";
    }
  } else {
    return "Unknown ticket id";
  }
};
const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verenda Nardi",
};

const simpleTicketStatus = (ticketList, ticket) => {
  if (ticket in ticketList) {
    if (ticketList[ticket] != null) {
      return `${ticketList[ticket]}`;
    } else {
      return "Invalid ticket!";
    }
  } else {
    return "Invalid ticket!";
  }
};
console.log(ticketStatus(tickets, "RE90VAW7"));
console.log(ticketStatus(tickets, "0H2AZ123"));
console.log(ticketStatus(tickets, "23LA9T41"));
console.log("\n");
console.log(simpleTicketStatus(tickets, "RE90VAW7"));
console.log(simpleTicketStatus(tickets, "0H2AZ123"));
console.log(simpleTicketStatus(tickets, "23LA9T41"));


const gtcVersion = (who) => {
  if (who.gtc != null) {
    return who.gtc.version;
  } else {
    return "undefined";
  }
};
const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};
console.log(gtcVersion(visitorNew));

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

console.log(gtcVersion(visitorOld));
