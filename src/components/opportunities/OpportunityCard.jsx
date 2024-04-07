import { format } from "date-fns";
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
            <Card.Title className="text-left ">{opportunity?.title}</Card.Title>
            <Card.Text className="my-3">
              <Stack direction="vertical" gap={1}>
                <Stack direction="horizontal" gap={3} className="pb-2">
                  <img
                    src={
                      opportunity?.organizationEntity?.logo ||
                      "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    }
                    class="rounded-circle"
                    width={40}
                    alt="Avatar"
                  />
                  <div>
                    <div>{opportunity?.organizationEntity?.username}</div>
                    <div className="text-secondary">
                      {opportunity?.organizationEntity?.email}
                    </div>
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Start : </div>
                  <div>
                    {format(opportunity?.startDate, "dd/MM/yyyy HH:mm")}
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>End : </div>
                  <div>{format(opportunity?.endDate, "dd/MM/yyyy HH:mm")}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Venue : </div>
                  <div>{opportunity?.location}</div>
                </Stack>

                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Type : </div>
                  <div>{opportunity?.type}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Objectives : </div>
                  <div>{opportunity?.objectives}</div>
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
