import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";
import { format } from "date-fns";

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
                    <div>{announcement?.organizationEntity?.username}</div>
                    <div className="text-secondary">
                      {announcement?.organizationEntity?.email}
                    </div>
                  </div>
                </Stack>

                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Message : </div>
                  <div>{announcement?.message}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Created At : </div>
                  <div>{announcement?.date && format(announcement?.date, "dd/MM/yyyy HH:mm")}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Description : </div>
                  <div className="text-white-50">
                    {announcement?.description}
                  </div>
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
