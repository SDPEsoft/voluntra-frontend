import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";

const OrganizationCard = ({ organization }) => {
  return (
    <div>
      <Link
        to={`/organizations/${organization?.id}`}
        className="text-decoration-none"
      >
        <Card bg="dark" text="white" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Text className="">
              <Stack direction="vertical" gap={1}>
                <Stack direction="horizontal" gap={3} className="pb-2">
                  <img
                    src={
                      organization?.logo_url ||
                      "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    }
                    class="rounded-circle"
                    width={80}
                    alt="Avatar"
                  />
                  <div>
                    <div>{organization?.name}</div>
                    <div className="text-secondary">{organization?.email}</div>
                    <div>
                      <Rating rating={organization?.rating} />
                    </div>
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Start Date : </div>
                  <div>{organization?.start_date}</div>
                </Stack>
                <Stack
                  direction="vertical"
                  className="border-bottom border-secondary"
                >
                  <div>Address : </div>
                  <div> {organization?.address}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Members Count : </div>
                  <div>{organization?.members_count}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Description : </div>
                  <div className="text-white-50">
                    {organization?.description}
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

export default OrganizationCard;
