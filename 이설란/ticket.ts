class Invitation {
  private when: Date;

  constructor(when: Date) {
    this.when = when;
  }
}

class Ticket {
  private fee: number;

  constructor(fee: number) {
    this.fee = fee;
  }

  public getFee() {
    return this.fee;
  }
}
class Bag {
  private amount: number;
  private invitation: null | Invitation;
  private ticket: Ticket;

  constructor(amount: number, invitation: null | Invitation, ticket: Ticket) {
    this.amount = amount;
    this.invitation = invitation;
    this.ticket = ticket;
  }

  public hasInvitation() {
    return this.invitation !== null;
  }

  public setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  public minusAmount(amount: number) {
    this.amount -= amount;
  }

  public publicAmount(amount: number) {
    this.amount += amount;
  }
}

class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  public getBag() {
    return this.bag;
  }
}

class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = tickets;
  }

  public getTicket() {
    return this.tickets.shift() as Ticket;
  }

  public minusAmount(amount: number) {
    this.amount -= amount;
  }

  public plusAmount(amount: number) {
    this.amount += amount;
  }
}

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  public getTicketOffice() {
    return this.ticketOffice;
  }
}

class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  public enter(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      audience.getBag().setTicket(ticket);
    } else {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      audience.getBag().minusAmount(ticket.getFee());
      this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}

const invitation = new Invitation(new Date());
const ticket = new Ticket(100);
const bag = new Bag(100, invitation, ticket);
const audience = new Audience(bag);
const ticketOffice = new TicketOffice(0, [ticket]);
const ticketSeller = new TicketSeller(ticketOffice);
const theater = new Theater(ticketSeller);
console.log(theater.enter(audience));
