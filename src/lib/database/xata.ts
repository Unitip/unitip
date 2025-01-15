// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "users",
    columns: [
      { name: "email", type: "text", notNull: true, defaultValue: "" },
      { name: "password", type: "text", notNull: true, defaultValue: "" },
      { name: "name", type: "text", notNull: true, defaultValue: "" },
    ],
    revLinks: [
      { column: "from", table: "chat_messages" },
      { column: "to", table: "chat_messages" },
      { column: "customerId", table: "customer_requests" },
      { column: "driverId", table: "driver_offers" },
      { column: "from_user", table: "chat_rooms" },
      { column: "to_user", table: "chat_rooms" },
      { column: "last_sent_user", table: "chat_rooms" },
      { column: "user", table: "user_roles" },
      { column: "applicant", table: "customer_request_applications" },
      { column: "user", table: "user_sessions" },
      { column: "customer", table: "single_jobs" },
      { column: "freelancer", table: "single_jobs" },
      { column: "freelancer", table: "single_job_applicants" },
      { column: "freelancer", table: "multi_jobs" },
      { column: "freelancer", table: "multi_offers" },
      { column: "customer", table: "multi_offer_orders" },
      { column: "freelancer", table: "multi_job_applicants" },
      { column: "customer", table: "multi_job_followers" },
      { column: "customer", table: "multi_jobs" },
      { column: "freelancer", table: "single_offers" },
      { column: "customer", table: "single_offers" },
      { column: "customer", table: "single_offer_applicants" },
    ],
  },
  {
    name: "chat_messages",
    columns: [
      { name: "message", type: "text", notNull: true, defaultValue: "" },
      { name: "from", type: "link", link: { table: "users" } },
      { name: "to", type: "link", link: { table: "users" } },
      {
        name: "is_deleted",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
    ],
  },
  {
    name: "customer_requests",
    columns: [
      {
        name: "pickupLocation",
        type: "text",
        notNull: true,
        defaultValue: "null",
      },
      {
        name: "dropoffLocation",
        type: "text",
        notNull: true,
        defaultValue: "null",
      },
      { name: "additionalNotes", type: "text" },
      { name: "customerId", type: "link", link: { table: "users" } },
      { name: "type", type: "text" },
      { name: "status", type: "text" },
      { name: "preferredGender", type: "text" },
      {
        name: "pickupTime",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
    ],
    revLinks: [
      { column: "customer_requests", table: "customer_request_applications" },
    ],
  },
  {
    name: "driver_offers",
    columns: [
      { name: "title", type: "text", notNull: true, defaultValue: "null" },
      { name: "fee", type: "float", notNull: true, defaultValue: "0" },
      {
        name: "availableUntil",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      { name: "location", type: "text", notNull: true, defaultValue: "null" },
      { name: "additionalNotes", type: "text" },
      { name: "driverId", type: "link", link: { table: "users" } },
      { name: "type", type: "text" },
      { name: "status", type: "text" },
    ],
  },
  {
    name: "chat_rooms",
    columns: [
      { name: "last_message", type: "text", notNull: true, defaultValue: "" },
      { name: "from_user", type: "link", link: { table: "users" } },
      { name: "to_user", type: "link", link: { table: "users" } },
      { name: "last_sent_user", type: "link", link: { table: "users" } },
    ],
  },
  {
    name: "user_roles",
    columns: [
      { name: "user", type: "link", link: { table: "users" } },
      { name: "role", type: "text", notNull: true, defaultValue: "" },
    ],
  },
  {
    name: "customer_request_applications",
    columns: [
      { name: "status", type: "text" },
      { name: "applicant", type: "link", link: { table: "users" } },
      {
        name: "customer_requests",
        type: "link",
        link: { table: "customer_requests" },
      },
      { name: "fee", type: "int", notNull: true, defaultValue: "0" },
    ],
  },
  {
    name: "user_sessions",
    columns: [
      { name: "token", type: "text", notNull: true, defaultValue: "" },
      { name: "user", type: "link", link: { table: "users" } },
      { name: "role", type: "text", notNull: true, defaultValue: "" },
    ],
  },
  {
    name: "multi_offers",
    columns: [
      { name: "freelancer", type: "link", link: { table: "users" } },
      { name: "title", type: "text", notNull: true, defaultValue: "" },
      { name: "status", type: "text", notNull: true, defaultValue: "" },
      { name: "price", type: "int", notNull: true, defaultValue: "0" },
      {
        name: "available_until",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      { name: "description", type: "text", notNull: true, defaultValue: "" },
      { name: "location", type: "text", notNull: true, defaultValue: "" },
    ],
    revLinks: [{ column: "offer", table: "multi_offer_orders" }],
  },
  {
    name: "multi_offer_orders",
    columns: [
      { name: "offer", type: "link", link: { table: "multi_offers" } },
      {
        name: "delivery_location",
        type: "text",
        notNull: true,
        defaultValue: "",
      },
      { name: "note", type: "text", notNull: true, defaultValue: "" },
      { name: "payment_method", type: "text", notNull: true, defaultValue: "" },
      {
        name: "payment_status",
        type: "text",
        notNull: true,
        defaultValue: "unpaid",
      },
      { name: "status", type: "text", notNull: true, defaultValue: "pending" },
      { name: "customer", type: "link", link: { table: "users" } },
    ],
  },
  {
    name: "single_jobs",
    columns: [
      { name: "title", type: "text", notNull: true, defaultValue: "" },
      {
        name: "pickup_location",
        type: "text",
        notNull: true,
        defaultValue: "",
      },
      { name: "destination", type: "text", notNull: true, defaultValue: "" },
      { name: "note", type: "text", notNull: true, defaultValue: "" },
      { name: "type", type: "text", notNull: true, defaultValue: "" },
      { name: "customer", type: "link", link: { table: "users" } },
      { name: "freelancer", type: "link", link: { table: "users" } },
      { name: "price", type: "int", notNull: true, defaultValue: "0" },
    ],
    revLinks: [{ column: "job", table: "single_job_applicants" }],
  },
  {
    name: "multi_jobs",
    columns: [
      { name: "customer", type: "link", link: { table: "users" } },
      { name: "freelancer", type: "link", link: { table: "users" } },
      { name: "title", type: "text", notNull: true, defaultValue: "" },
      {
        name: "pickup_location",
        type: "text",
        notNull: true,
        defaultValue: "",
      },
      { name: "status", type: "text", notNull: true, defaultValue: "open" },
    ],
    revLinks: [
      { column: "job", table: "multi_job_applicants" },
      { column: "job", table: "multi_job_followers" },
    ],
  },
  {
    name: "multi_job_followers",
    columns: [
      { name: "job", type: "link", link: { table: "multi_jobs" } },
      { name: "customer", type: "link", link: { table: "users" } },
      { name: "destination", type: "text", notNull: true, defaultValue: "" },
      { name: "status", type: "text", notNull: true, defaultValue: "pending" },
    ],
  },
  {
    name: "single_job_applicants",
    columns: [
      { name: "price", type: "int", notNull: true, defaultValue: "0" },
      { name: "freelancer", type: "link", link: { table: "users" } },
      { name: "job", type: "link", link: { table: "single_jobs" } },
    ],
  },
  {
    name: "multi_job_applicants",
    columns: [
      { name: "price", type: "int", notNull: true, defaultValue: "0" },
      { name: "job", type: "link", link: { table: "multi_jobs" } },
      { name: "freelancer", type: "link", link: { table: "users" } },
      { name: "status", type: "text", notNull: true, defaultValue: "pending" },
    ],
  },
  {
    name: "single_offers",
    columns: [
      { name: "freelancer", type: "link", link: { table: "users" } },
      { name: "customer", type: "link", link: { table: "users" } },
      { name: "price", type: "int", notNull: true, defaultValue: "0" },
      { name: "title", type: "text", notNull: true, defaultValue: "" },
      {
        name: "available_until",
        type: "text",
        notNull: true,
        defaultValue: "",
      },
      { name: "delivery_area", type: "text", notNull: true, defaultValue: "" },
      { name: "description", type: "text", notNull: true, defaultValue: "" },
      { name: "type", type: "text", notNull: true, defaultValue: "" },
      { name: "pickup_area", type: "text", notNull: true, defaultValue: "" },
      {
        name: "offer_status",
        type: "text",
        notNull: true,
        defaultValue: "available",
      },
      { name: "expired_at", type: "text" },
    ],
    revLinks: [{ column: "offer", table: "single_offer_applicants" }],
  },
  {
    name: "single_offer_applicants",
    columns: [
      {
        name: "pickup_location",
        type: "text",
        notNull: true,
        defaultValue: "",
      },
      { name: "note", type: "text", notNull: true, defaultValue: "" },
      {
        name: "delivery_location",
        type: "text",
        notNull: true,
        defaultValue: "",
      },
      { name: "offer", type: "link", link: { table: "single_offers" } },
      { name: "customer", type: "link", link: { table: "users" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type ChatMessages = InferredTypes["chat_messages"];
export type ChatMessagesRecord = ChatMessages & XataRecord;

export type CustomerRequests = InferredTypes["customer_requests"];
export type CustomerRequestsRecord = CustomerRequests & XataRecord;

export type DriverOffers = InferredTypes["driver_offers"];
export type DriverOffersRecord = DriverOffers & XataRecord;

export type ChatRooms = InferredTypes["chat_rooms"];
export type ChatRoomsRecord = ChatRooms & XataRecord;

export type UserRoles = InferredTypes["user_roles"];
export type UserRolesRecord = UserRoles & XataRecord;

export type CustomerRequestApplications =
  InferredTypes["customer_request_applications"];
export type CustomerRequestApplicationsRecord = CustomerRequestApplications &
  XataRecord;

export type UserSessions = InferredTypes["user_sessions"];
export type UserSessionsRecord = UserSessions & XataRecord;

export type MultiOffers = InferredTypes["multi_offers"];
export type MultiOffersRecord = MultiOffers & XataRecord;

export type MultiOfferOrders = InferredTypes["multi_offer_orders"];
export type MultiOfferOrdersRecord = MultiOfferOrders & XataRecord;

export type SingleJobs = InferredTypes["single_jobs"];
export type SingleJobsRecord = SingleJobs & XataRecord;

export type MultiJobs = InferredTypes["multi_jobs"];
export type MultiJobsRecord = MultiJobs & XataRecord;

export type MultiJobFollowers = InferredTypes["multi_job_followers"];
export type MultiJobFollowersRecord = MultiJobFollowers & XataRecord;

export type SingleJobApplicants = InferredTypes["single_job_applicants"];
export type SingleJobApplicantsRecord = SingleJobApplicants & XataRecord;

export type MultiJobApplicants = InferredTypes["multi_job_applicants"];
export type MultiJobApplicantsRecord = MultiJobApplicants & XataRecord;

export type SingleOffers = InferredTypes["single_offers"];
export type SingleOffersRecord = SingleOffers & XataRecord;

export type SingleOfferApplicants = InferredTypes["single_offer_applicants"];
export type SingleOfferApplicantsRecord = SingleOfferApplicants & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
  chat_messages: ChatMessagesRecord;
  customer_requests: CustomerRequestsRecord;
  driver_offers: DriverOffersRecord;
  chat_rooms: ChatRoomsRecord;
  user_roles: UserRolesRecord;
  customer_request_applications: CustomerRequestApplicationsRecord;
  user_sessions: UserSessionsRecord;
  multi_offers: MultiOffersRecord;
  multi_offer_orders: MultiOfferOrdersRecord;
  single_jobs: SingleJobsRecord;
  multi_jobs: MultiJobsRecord;
  multi_job_followers: MultiJobFollowersRecord;
  single_job_applicants: SingleJobApplicantsRecord;
  multi_job_applicants: MultiJobApplicantsRecord;
  single_offers: SingleOffersRecord;
  single_offer_applicants: SingleOfferApplicantsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://unitip-s-workspace-na7h8a.ap-southeast-2.xata.sh/db/unitip",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
