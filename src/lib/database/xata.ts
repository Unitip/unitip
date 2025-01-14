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
      { column: "applicantId", table: "job_applications" },
      { column: "from_user", table: "chat_rooms" },
      { column: "to_user", table: "chat_rooms" },
      { column: "last_sent_user", table: "chat_rooms" },
      { column: "user", table: "user_roles" },
      { column: "applicant", table: "customer_request_applications" },
      { column: "user", table: "user_sessions" },
      { column: "creator", table: "offers" },
      { column: "customer", table: "single_jobs" },
      { column: "driver", table: "single_jobs" },
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
      { column: "customerRequestId", table: "job_applications" },
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
    revLinks: [{ column: "driverOfferId", table: "job_applications" }],
  },
  {
    name: "job_applications",
    columns: [
      { name: "status", type: "text", notNull: true, defaultValue: "null" },
      { name: "driverOfferId", type: "link", link: { table: "driver_offers" } },
      {
        name: "customerRequestId",
        type: "link",
        link: { table: "customer_requests" },
      },
      { name: "applicantId", type: "link", link: { table: "users" } },
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
    name: "offers",
    columns: [
      { name: "creator", type: "link", link: { table: "users" } },
      { name: "title", type: "text", notNull: true, defaultValue: "" },
      { name: "description", type: "text", notNull: true, defaultValue: "" },
      { name: "fee", type: "int", notNull: true, defaultValue: "0" },
      { name: "location", type: "text", notNull: true, defaultValue: "" },
    ],
  },
  { name: "single_offers", columns: [] },
  { name: "multi_offers", columns: [] },
  { name: "multi_offer_followers", columns: [] },
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
      { name: "driver", type: "link", link: { table: "users" } },
    ],
  },
  { name: "multi_jobs", columns: [] },
  { name: "multi_job_followers", columns: [] },
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

export type JobApplications = InferredTypes["job_applications"];
export type JobApplicationsRecord = JobApplications & XataRecord;

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

export type Offers = InferredTypes["offers"];
export type OffersRecord = Offers & XataRecord;

export type SingleOffers = InferredTypes["single_offers"];
export type SingleOffersRecord = SingleOffers & XataRecord;

export type MultiOffers = InferredTypes["multi_offers"];
export type MultiOffersRecord = MultiOffers & XataRecord;

export type MultiOfferFollowers = InferredTypes["multi_offer_followers"];
export type MultiOfferFollowersRecord = MultiOfferFollowers & XataRecord;

export type SingleJobs = InferredTypes["single_jobs"];
export type SingleJobsRecord = SingleJobs & XataRecord;

export type MultiJobs = InferredTypes["multi_jobs"];
export type MultiJobsRecord = MultiJobs & XataRecord;

export type MultiJobFollowers = InferredTypes["multi_job_followers"];
export type MultiJobFollowersRecord = MultiJobFollowers & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
  chat_messages: ChatMessagesRecord;
  customer_requests: CustomerRequestsRecord;
  driver_offers: DriverOffersRecord;
  job_applications: JobApplicationsRecord;
  chat_rooms: ChatRoomsRecord;
  user_roles: UserRolesRecord;
  customer_request_applications: CustomerRequestApplicationsRecord;
  user_sessions: UserSessionsRecord;
  offers: OffersRecord;
  single_offers: SingleOffersRecord;
  multi_offers: MultiOffersRecord;
  multi_offer_followers: MultiOfferFollowersRecord;
  single_jobs: SingleJobsRecord;
  multi_jobs: MultiJobsRecord;
  multi_job_followers: MultiJobFollowersRecord;
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
