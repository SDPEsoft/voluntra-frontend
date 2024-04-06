import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";

const AnnouncementCard = ({ announcement }) => {
  return (
    <div>
      <Link
        to={`/announcements/${announcement?.id}`}
        className="text-decoration-none"
      >
        <Card bg="dark" text="white" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Text className="">
              <Stack direction="vertical" gap={1}>
                <Stack direction="horizontal" gap={3} className="pb-2">
                  <img
                    src={
                      announcement?.logo_url ||
                      "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    }
                    class="rounded-circle"
                    width={80}
                    alt="Avatar"
                  />
                  <div>
                    <div>{announcement?.name}</div>
                    <div className="text-secondary">{announcement?.email}</div>
                    <div>
                      <Rating rating={announcement?.rating} />
                    </div>
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Phone Number : </div>
                  <div>{announcement?.phone_no}</div>
                </Stack>
                <Stack
                  direction="vertical"
                  className="border-bottom border-secondary"
                >
                  <div>Address : </div>
                  <div> {announcement?.address}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>DOB : </div>
                  <div>{announcement?.dob}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Description : </div>
                  <div className="text-white-50">{announcement?.description}</div>
                </Stack>
              </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default AnnouncementCard;
