const express = require("express");
const validateRouter = express.Router();
const { celebrate, errors, Joi } = require("celebrate");

const responseData = {status: 200, message:'api validate successfully'}
validateRouter.get(
  "/query",
  celebrate({
    query: Joi.object().keys({
      start: Joi.date().optional(),
      end: Joi.date().optional(),
    }),
    params: Joi.object().keys({
      skip: Joi.number().optional(),
      limit: Joi.number().optional()
    })
  }),
  errors(),
  (request, response) => {
    response.status(200).send(responseData)
  }
);

validateRouter.get(
  "/params",
  celebrate({
    query: Joi.object().keys({
      start: Joi.date().optional(),
      end: Joi.date().optional(),
    }),
    params: Joi.object().keys({
      skip: Joi.number().optional(),
      limit: Joi.number().optional()
    })
  }),
  errors(),
  (request, response) => {
    response.status(200).send(responseData)
  }
);

validateRouter.post(
  "/bodyParams",
  celebrate({
    body: Joi.object()
      .keys({
        title: Joi.string().required(),
        employeeId: Joi.number().optional(),
        dateOfJoining: Joi.date().optional(),
        adress: Joi.object().optional(),
        phoneNumbers: Joi.array().optional(),
        description: Joi.string().optional().allow(""),
        needIdCard: Joi.string().optional().allow("").default('yes'),
        outcomeOfvalidate: Joi.number().optional().default(123),
        dateOfBirth: Joi.date().optional().default(28/07/1997),
        timerControls: Joi.object().keys({
          timerType: Joi.string().optional(),
          isNotification: Joi.boolean().optional(),
        }),
        participants: Joi.array().items(
          Joi.object()
            .keys({
              email: Joi.string().optional(),
              name: Joi.string().required()
            })
            .optional()
        ),
      })
      .required(),
  }),

  errors(),
  (request, response) => {
    response.status(200).send(responseData)
  }
);

module.exports = validateRouter;
