const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const idlength = 8;

const DELAY = 1000;

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Tasks:
 *        type: object
 *        required:
 *          - title
 *          - isFinished
 *        properties:
 *          id:
 *            type: string
 *            description: The auto-generated id of the task.
 *          title:
 *            type: string
 *            description: The title of the task.
 *          isFinished:
 *            type: boolean
 *            description: Is task finished?
 *        example:
 *           id: d5fE_asz
 *           title: The New Turing Omnibus
 *           isFinished: true
 */

/**
 *  @swagger
 *  tags:
 *    name: Tasks
 *    description: API to manage the tasks.
 */

/**
 *  @swagger
 *  /tasks:
 *    get:
 *      summary: Lists all the tasks
 *      tags: [Tasks]
 *      responses:
 *        200:
 *          description: The list of all tasks.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Tasks'
 */
router.get("/", (req, res) => {
	const tasks = req.app.db.get("tasks");

  setTimeout(() => {
    res.send(tasks)
  }, DELAY)
});

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task description by id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       404:
 *         description: The book not found.
 */
router.get("/:id", (req, res) => {
	const task = req.app.db.get("tasks").find({ id: req.params.id }).value();

  setTimeout(() => {
	  res.send(task);
  }, DELAY)
});

/**
 *  @swagger
 *  /tasks:
 *    post:
 *      summary: Create a new task
 *      tags: [Tasks]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tasks'
 *       parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The task id
 *        - title: Title of the task
 *        - isFinished: Is task finished?
 *      responses:
 *        200:
 *          description: The created task
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Tasks'
 *        500:
 *          description: Server error
 */
router.post("/", (req, res) => {
	try {
		const task = {
			id: nanoid(idlength),
			...req.body,
		};
		req.app.db.get("tasks").push(task).write();

    setTimeout(() => {
	   res.send(task);
    }, DELAY)
	} catch (error) {
		return res.status(500).send(error);
	}
});

/**
 *  @swagger
 *  /tasks/{id}:
 *    put:
 *      summary: Update the task by id
 *      tags: [Tasks]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The task id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tasks'
 *      responses:
 *        200:
 *          description: The updated task
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Tasks'
 *        404:
 *          description: The book not found
 *        500:
 *          description: Server error
 */
router.put("/:id", (req, res) => {
	try {
		req.app.db.get("tasks").find({ id: req.params.id }).assign(req.body).write();

		setTimeout(() => {
      res.send(req.app.db.get("tasks").find({ id: req.params.id }));
    }, DELAY)
	} catch (e) {
		return res.status(500).send(e);
	}
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task not found.
 */
router.delete("/:id", (req, res) => {
	req.app.db.get("tasks").remove({ id: req.params.id }).write();

  setTimeout(() => {
	  res.sendStatus(200);
  }, DELAY)
});

module.exports = router;
