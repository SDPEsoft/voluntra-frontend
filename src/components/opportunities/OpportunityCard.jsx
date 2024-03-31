import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const OpportunityCard = ({ opportunity }) => {
  console.log(opportunity);
  return (
    <div>
      <Link
        to={`/opportunities/${opportunity?.id}`}
        className="text-decoration-none"
      >
        <Card bg="dark" text="white" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title className="text-left ">
              {opportunity?.name}
            </Card.Title>
            <Card.Text className="my-3">
              <Stack direction="vertical" gap={1}>
                <Stack direction="horizontal" gap={3} className="pb-2">
                  <img
                    src={
                      opportunity?.organization?.logo ||
                      "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    }
                    class="rounded-circle"
                    width={40}
                    alt="Avatar"
                  />
                  <div>
                    <div>{opportunity?.organization?.name}</div>
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Date : </div>
                  <div>{opportunity?.date}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Time : </div>
                  <div>{opportunity?.time}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Venue : </div>
                  <div>{opportunity?.venue}</div>
                </Stack>
                <Stack
                  direction="vertical"
                  className="border-bottom border-secondary"
                >
                  <div>Location Link : </div>
                  <Link target="_blank" to={opportunity?.location_link}>
                    {opportunity?.location_link}
                  </Link>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Attendies : </div>
                  <div>{opportunity?.attendies}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Description : </div>
                  <div className="text-white-50">
                    {opportunity?.description}
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

export default OpportunityCard;
